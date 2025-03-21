package edu.eci.arep.twitter.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET_KEY = "your-secret-key";
    private static final long EXPIRATION_TIME = 3600000; // 1 hora

    public String generateToken(String username) {
        return JWT.create()
                .withSubject(username)
                .withIssuer("TwitterClone")
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET_KEY));
    }
}
