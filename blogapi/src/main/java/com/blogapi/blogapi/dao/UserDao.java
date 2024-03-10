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

    // to check user exist or not
    @Query("SELECT u.username FROM users u WHERE u.username  = ?1")
    String username(String username);

    // get the current user
    @Query("SELECT u FROM users u WHERE u.id = ?1")
    users findByUserId(Long userId);

    //geting the current login user id
    @Query("SELECT u.id FROM users u WHERE u.username  = ?1")
    long userid (String username);


}
