package com.blogapi.blogapi.controller;

import com.blogapi.blogapi.services.cloudinaryImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/uploadImage")
public class cloudinaryImageController {

    @Autowired
    private cloudinaryImageService cloudinaryImageService;

    @PostMapping("/event")

    public ResponseEntity<Map> uploadingEventImage(@RequestParam("postId") Long postId, @RequestParam("EventImage")MultipartFile file) {
        Map data = this.cloudinaryImageService.uploadEventImage(postId,file);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/qr")
    public ResponseEntity<Map> uploadingQrImage(@RequestParam("postId") Long postId, @RequestParam("qrImage")MultipartFile file) {
        Map data = this.cloudinaryImageService.uploadQrImage(postId,file);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }


}
