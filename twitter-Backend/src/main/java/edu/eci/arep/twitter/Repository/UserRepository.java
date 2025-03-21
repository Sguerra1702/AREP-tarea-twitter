package edu.eci.arep.twitter.Repository;

import edu.eci.arep.twitter.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByUsername(String username);

    void deleteByUsername(String username);
}
