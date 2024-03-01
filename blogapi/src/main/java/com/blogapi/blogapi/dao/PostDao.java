package com.blogapi.blogapi.dao;

import com.blogapi.blogapi.entities.posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDao extends JpaRepository<posts,Long> {
}


