package in.kellia.MyMart.service;

import in.kellia.MyMart.Model.Address;
import in.kellia.MyMart.dto.requests.NewUserRequest;

public interface UserService {
    public String createNewAccount(NewUserRequest newUserRequest);
    public String updateUserRecord(NewUserRequest newUserRequest, int userId);
}
