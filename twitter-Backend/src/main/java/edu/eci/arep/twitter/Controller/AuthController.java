package edu.eci.arep.twitter.Controller;

import edu.eci.arep.twitter.Model.User;
import edu.eci.arep.twitter.Service.JwtService;
import edu.eci.arep.twitter.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userService.getUserByUsername(user.getUsername());

        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            String token = jwtService.generateToken(existingUser.getUsername());
            return ResponseEntity.ok().body(new AuthResponse(token, existingUser.getUsername(), existingUser.getName(), existingUser.getRole()));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }


    private static class AuthResponse {
        private String token;
        private String username;
        private String name;
        private String role;

        public AuthResponse(String token, String username, String name, String role) {
            this.token = token;
            this.username = username;
            this.name = name;
            this.role = role;
        }

        public String getToken() { return token; }
        public String getUsername() { return username; }
        public String getName() { return name; }
        public String getRole() { return role; }

        public void setToken(String token) { this.token = token; }
        public void setUsername(String username) { this.username = username; }
        public void setName(String name) { this.name = name; }
        public void setRole(String role) { this.role = role; }
    }


}