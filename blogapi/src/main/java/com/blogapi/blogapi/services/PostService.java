package com.blogapi.blogapi.services;
import com.blogapi.blogapi.entities.posts;

import java.util.List;

public interface PostService {
    public List<posts> getPosts(long userId);
    public posts getPostsById(long postId);
    public  posts addPost(posts posts, long userId);
    public posts editPost(posts posts, long postId);
    public void deletePostById(long postId);

    public List<posts> getPostsByBranch(String branch);

    public List<posts> getAllPosts();
}
