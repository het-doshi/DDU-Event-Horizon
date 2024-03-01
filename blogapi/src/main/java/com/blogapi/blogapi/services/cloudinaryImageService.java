package com.blogapi.blogapi.services;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

public interface cloudinaryImageService {

    public Map uploadEventImage(Long postId, MultipartFile file);

    public Map uploadQrImage(Long postId, MultipartFile file);

}
