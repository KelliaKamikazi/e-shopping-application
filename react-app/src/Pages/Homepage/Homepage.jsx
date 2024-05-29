import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoFetched } from '../../redux/authActions';
import './Homepage.css'; // Import the CSS file

function Homepage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const allProducts = async () => {
        getAllProduct().then(res => {
            setData(res.data);
        }).catch(err => {
            console.log("Error ", err);
        });
    }

    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
        allProducts();
    }, [dispatch]);

    const productDetails = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div className='container homepage-container'>
            <div className="d-flex flex-wrap">
                {data.map(({ id, itemTitle, category, price, image }) => (
                    <div key={id} className="card product-card" onClick={() => productDetails(id)}>
                        <div className="card-img-container">
                            <img src={image} className="card-img-top img-fluid" alt={itemTitle} />
                        </div>
                        <div className="card-body border-top">
                            <h5 className="card-title text-truncate">{itemTitle}</h5>
                            <p className="card-text m-0">{category}</p>
                            <h5 className='mt-2 price'>&#8377;<span className='text-danger'>{price.toLocaleString('en-IN')}</span></h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
