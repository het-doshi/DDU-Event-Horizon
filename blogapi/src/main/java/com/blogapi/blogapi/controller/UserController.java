package com.blogapi.blogapi.controller;

import com.blogapi.blogapi.entities.users;
import com.blogapi.blogapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // get all users
    @GetMapping("/users")
    public List<users> getusers() {
        return this.userService.getPosts();
    }

    //Registration
    @PostMapping("/users")
    public  users addUser(@RequestBody users users){
        return this.userService.addUser(users);
    }

    //Login
    @PostMapping("/login")
    public users login(@RequestBody users users)
    {
        return this.userService.login(users);
    }

}
