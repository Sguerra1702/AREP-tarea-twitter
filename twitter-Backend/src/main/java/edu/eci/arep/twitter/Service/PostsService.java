package edu.eci.arep.twitter.Service;

import edu.eci.arep.twitter.Model.Post;
import edu.eci.arep.twitter.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostsService {

    @Autowired
    private PostRepository PostRepository;

    public Post createPost(Post post){
        return PostRepository.save(post);
    }

    public void deletePost(String id){
        PostRepository.deleteById(id);
    }
}
