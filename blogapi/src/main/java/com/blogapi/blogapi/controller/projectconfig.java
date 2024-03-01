package com.blogapi.blogapi.controller;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class projectconfig {
    @Bean
    public Cloudinary getCloudinary(){
        Map config = new HashMap();
        config.put("cloud_name","dfnn4ox7q");
        config.put("api_key","167924479915846");
        config.put("api_secret","6-c-WARoOjTIXT9W7ToKjLZxSV4");
        config.put("secure",true);

        return new Cloudinary(config);
    }
}
