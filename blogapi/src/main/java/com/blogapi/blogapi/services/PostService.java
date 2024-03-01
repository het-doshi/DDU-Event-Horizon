package com.blogapi.blogapi.services;

import com.blogapi.blogapi.entities.posts;
import jakarta.servlet.http.PushBuilder;

import java.util.List;

public interface PostService {
    public List<posts> getPosts();
    public posts getPostsById(long postId);
    public  posts addPost(posts posts);
    public posts editPost(posts posts, long postId);
    public void deletePostById(long postId);

}
