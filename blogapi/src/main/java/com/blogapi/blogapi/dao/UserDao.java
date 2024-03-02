package com.blogapi.blogapi.dao;
import com.blogapi.blogapi.entities.users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserDao extends JpaRepository<users,Long> {

    // get the existing password
    @Query("SELECT u.password FROM users u WHERE u.username  = ?1")
    String password(String username);

    // get the userEmail
    @Query("SELECT u.email FROM users u WHERE u.username  = ?1")
    String email(String username);
}
