package edu.eci.arep.twitter.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String username;
    private String content;
    private String date;
    private static final int MAX_LENGTH = 140;

    public Post(String username, String content, String date) {
        this.username = username;
        this.content = content;
        this.date = date;
    }

    public Post() {
    }

    public String getUsername() {
        return username;
    }

    public String getContent() {
        return content;
    }

    public String getDate() {
        return date;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }
}
