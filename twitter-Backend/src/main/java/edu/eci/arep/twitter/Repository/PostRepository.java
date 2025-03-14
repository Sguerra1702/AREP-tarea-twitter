package edu.eci.arep.twitter.Repository;

import edu.eci.arep.twitter.Model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {

}
