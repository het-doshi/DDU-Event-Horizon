package com.blogapi.blogapi.dao;

import com.blogapi.blogapi.entities.posts;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostDao extends JpaRepository<posts,Long> {

        void deleteById(long id);

        //select all the post of individual user
        @Query("SELECT p FROM posts p WHERE p.users.id = ?1")
        List<posts> findPostsByUserId(Long userId);

        //get all the posts by branch
        @Query("SELECT p FROM posts p WHERE p.branch = ?1")
        List<posts> findPostsByBranch(String branch);

}


