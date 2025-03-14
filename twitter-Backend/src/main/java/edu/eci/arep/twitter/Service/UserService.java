package edu.eci.arep.twitter.Service;

import edu.eci.arep.twitter.Model.User;
import edu.eci.arep.twitter.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(String name, String email, String password, String username, String role){
        userRepository.save(new User(name, email, password, username, role));
    }

    public User getUser(String username){
        return userRepository.findByUsername(username);
    }

    public void updateUser(String username, String attributeToModify, String newValue){
        User user = userRepository.findByUsername(username);
        switch (attributeToModify){
            case "name":
                user.setName(newValue);
                break;
            case "email":
                user.setEmail(newValue);
                break;
            case "password":
                user.setPassword(newValue);
                break;
            case "role":
                user.setRole(newValue);
                break;
        }
        userRepository.save(user);
    }
}
