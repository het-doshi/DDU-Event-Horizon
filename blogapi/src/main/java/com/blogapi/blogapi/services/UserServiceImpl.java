package com.blogapi.blogapi.services;

import com.blogapi.blogapi.dao.UserDao;
import com.blogapi.blogapi.entities.posts;
import com.blogapi.blogapi.entities.users;
import org.apache.commons.lang3.ObjectUtils;
import org.aspectj.bridge.IMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public  UserServiceImpl(){}
    @Override
    public List<users> getPosts() {
        return userDao.findAll();
    }

    @Override
    public users addUser(users users) {
        userDao.save(users);
        return users;
    }


    @Override
    public users login(users users) {
        String enteredUsername = users.getUsername();
        String enteredPassword = users.getPassword();
        String existingPassword = userDao.password(enteredUsername);

        if (existingPassword != null) {
            if (existingPassword.equals(enteredPassword)) {
                System.out.println("Login success");
                String email = userDao.email(enteredUsername);
                users.setEmail(email);
                return users;
            } else {
                System.out.println("Incorrect credentials");
                return null;
            }
        } else {
            System.out.println("Login failed: User is not registered");
            return null;
        }
    }


}

