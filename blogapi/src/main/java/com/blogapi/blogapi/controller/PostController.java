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
    public List<posts> getPosts()
    {
        return this.postService.getPosts();
    }

    //get the specific post by id
    @GetMapping("/posts/{postId}")
    public posts getpostbyid(@PathVariable String postId)
    {
        return this.postService.getPostsById(parseLong(postId));
    }

    //add new post
    @PostMapping(path = "/posts", consumes = "application/json")
    public posts addpost(@RequestBody posts posts)
    {
        return this.postService.addPost(posts);
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
        try
        {
            this.postService.deletePostById(parseLong(postId));
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}