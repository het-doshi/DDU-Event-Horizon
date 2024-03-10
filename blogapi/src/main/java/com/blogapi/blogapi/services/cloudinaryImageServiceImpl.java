package com.blogapi.blogapi.services;

import com.blogapi.blogapi.entities.posts;
import com.blogapi.blogapi.dao.PostDao;
import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Map;

@Service
public class cloudinaryImageServiceImpl implements cloudinaryImageService {

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private PostDao postDao;

    @Override
    public Map uploadEventImage(Long postId, MultipartFile file) {

        try {
            Map data = this.cloudinary.uploader().upload(file.getBytes(), Map.of());

            // Extract the image URL from the Cloudinary response
            String EventImage = (String) data.get("url");

            // Retrieve the post by ID
            posts post = postDao.findById(postId).orElseThrow(() -> new RuntimeException("Post not found"));

            // Set the image URL for the post
            post.seteventImage(EventImage);

            // Save the post to update the image URL
            postDao.save(post);

            return data;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Map uploadQrImage(Long postId, MultipartFile file) {

        try {
            Map data = this.cloudinary.uploader().upload(file.getBytes(), Map.of());

            // Extract the image URL from the Cloudinary response
            String qrImage = (String) data.get("url");

            // Retrieve the post by ID
            posts post = postDao.findById(postId).orElseThrow(() -> new RuntimeException("Post not found"));

            // Set the image URL for the post
            post.setQrImage(qrImage);

            // Save the post to update the image URL
            postDao.save(post);

            return data;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
