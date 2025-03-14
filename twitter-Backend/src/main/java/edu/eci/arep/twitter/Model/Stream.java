package edu.eci.arep.twitter.Model;

import java.util.HashMap;
import java.util.Map;

public class Stream {

    private Map<String, Post> posts = new HashMap<>();

    public Stream() {

    }

    public void addPost(Post post) {
        posts.put(post.getId(), post);
    }

    public Map<String, Post> getPosts() {
        return posts;
    }
}
