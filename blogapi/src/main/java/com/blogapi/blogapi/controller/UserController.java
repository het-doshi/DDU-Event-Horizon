package com.blogapi.blogapi.controller;

import com.blogapi.blogapi.entities.users;
import com.blogapi.blogapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Long.parseLong;

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
    public  ResponseEntity<users> addUser(@RequestBody users users){
        try{
              users newuser = userService.addUser(users);
            if (newuser != null) {
                return ResponseEntity.ok(newuser);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
        }
        catch (Exception e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    //Login
    @PostMapping("/login")
    public ResponseEntity<users> login(@RequestBody users loginUser) {
        try {
            users authenticatedUser = userService.login(loginUser);
            if (authenticatedUser != null) {
                return ResponseEntity.ok(authenticatedUser);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


}
