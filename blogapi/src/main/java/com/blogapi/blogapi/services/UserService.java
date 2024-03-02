package com.blogapi.blogapi.services;
import com.blogapi.blogapi.entities.users;
import java.util.List;

public interface UserService {
    public List<users> getPosts();

    public  users addUser(users users);

    public users login (users users);
}
