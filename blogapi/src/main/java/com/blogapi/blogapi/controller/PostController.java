package com.blogapi.blogapi.controller;

import com.blogapi.blogapi.entities.posts;
import com.blogapi.blogapi.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import static java.lang.Long.parseLong;

@RestController
public class PostController {

    @Autowired
   private PostService postService;


    //get all the posts
    @GetMapping("/posts")
    public List<posts> getAllPosts() {
        return this.postService.getAllPosts();
    }

    //get all the posts for individual user
    @GetMapping("/posts/users/{userId}")
    public List<posts> getPosts(@PathVariable String userId) {
        return this.postService.getPosts(Long.parseLong(userId));
    }


    //get all the posts by branch
    @GetMapping("/posts/branch/{branch}")
    public List<posts> getPostsByBranch(@PathVariable String branch) {
        return this.postService.getPostsByBranch(branch);
    }

    //add new post
    @PostMapping(path = "/posts/{userId}")
    public posts addpost(@RequestBody posts posts, @PathVariable String userId)
    {
        return this.postService.addPost(posts, Long.parseLong(userId));
    }


    //updating post
    @PutMapping("/posts/{postId}")
    public ResponseEntity<posts> updatePost(@RequestBody posts posts, @PathVariable String postId) {
        posts updatedPost = postService.editPost(posts , Long.parseLong(postId));
        return ResponseEntity.ok(updatedPost);
    }



    //Delete post
    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<HttpStatus> deletePostById(@PathVariable String postId) {
        try {
            this.postService.deletePostById(Long.parseLong(postId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
             System.out.println(e);
        }
        return null;
    }


}