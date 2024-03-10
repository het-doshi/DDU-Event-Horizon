package com.blogapi.blogapi.services;

import com.blogapi.blogapi.dao.PostDao;
import com.blogapi.blogapi.dao.UserDao;
import com.blogapi.blogapi.entities.posts;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
private PostDao postDao;

    @Autowired
    private UserDao userDao;



    public PostServiceImpl()
    {

    }


    @Override
    public List<posts> getPosts(long userId) {
        return postDao.findPostsByUserId(userId);
    }

    @Override
    public posts getPostsById(long postId) {
        return postDao.getOne(postId);
    }

    @Override
    public posts addPost(posts posts, long userId) {
        posts.setUsers(userDao.findByUserId(userId));
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
            existingPost.setBranch(posts.getBranch());

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
    @Transactional
    public void deletePostById(long postId) {
        postDao.deleteById(postId);
    }

    @Override
    public List<posts> getPostsByBranch(String branch) {
        return postDao.findPostsByBranch(branch);
    }

    @Override
    public List<posts> getAllPosts() {
        return postDao.findAll();
    }


}



