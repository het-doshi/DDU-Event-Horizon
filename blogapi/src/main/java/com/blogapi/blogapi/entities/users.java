package com.blogapi.blogapi.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name="your_entity_seq", initialValue=1, allocationSize=1)
    private long id;

    private  String username;
    private  String password;
    private String email;
    private  String registerby;

    public users(){
        super();
    }

    //constructor
    public users(long id, String username, String password, String email, String registerby) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.registerby = registerby;
    }

    // getters and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getRegisterby() {
        return registerby;
    }

    public void setRegisterby(String registerby) {
        this.registerby = registerby;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "users[" + "id =" +id+ ", username = " +username+" , password='" +password+ ", email='" + email + ", registerby='" + registerby +"]";
    }


    //Relationship with posts
    @JsonManagedReference
    @OneToMany(mappedBy = "users", cascade = CascadeType.REMOVE)
    private List<posts> posts;

    public List<com.blogapi.blogapi.entities.posts> getPosts() {
        return posts;
    }

    public void setPosts(List<com.blogapi.blogapi.entities.posts> posts) {
        this.posts = posts;
    }
}