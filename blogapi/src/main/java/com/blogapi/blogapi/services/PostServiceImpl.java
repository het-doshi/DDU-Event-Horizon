package com.blogapi.blogapi.services;

import com.blogapi.blogapi.dao.PostDao;
import com.blogapi.blogapi.entities.posts;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
private PostDao postDao;



    public PostServiceImpl()
    {

    }


    @Override
    public List<posts> getPosts() {
        return postDao.findAll();
    }

    @Override
    public posts getPostsById(long postId) {
        return postDao.getOne(postId);
    }

    @Override
    public posts addPost(posts posts) {
        postDao.save(posts);
        return posts;
    }

    @Override
    @Transactional
    public posts editPost(posts posts, long postId) {
        try {
            posts existingPost = postDao.getOne(postId);
            if (existingPost == null) {
                // Handle the case where the post with the given ID does not exist
                return null;
            }

            // Update the existing post with the new data
            existingPost.setDescription(posts.getDescription());
            existingPost.setTitle(posts.getTitle());

            // Save the updated post
            posts updatedPost = postDao.save(existingPost);
            return updatedPost;
        } catch (EntityNotFoundException e) {
            // Handle the case where the post with the given ID does not exist
            return null;
        } catch (Exception e) {
            // Handle other unexpected exceptions
            e.printStackTrace(); // Log the exception or handle it appropriately
            return null;
        }
    }

    @Override
    public void deletePostById(long postId) {
        posts deletePost =  postDao.getOne(postId);
        postDao.delete(deletePost);
    }
}



