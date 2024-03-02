package com.blogapi.blogapi.entities;
import jakarta.persistence.*;

@Entity
public class users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name="your_entity_seq", initialValue=1, allocationSize=1)
    private long id;

    private  String username;
    private  String password;
    private String email;

    public users(){
        super();
    }

    //constructor
    public users(long id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
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

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "users[" + "id =" +id+ ", username = " +username+" , password='" +password+ ", email='" + email + "]";
    }
}