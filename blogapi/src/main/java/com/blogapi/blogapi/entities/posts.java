package com.blogapi.blogapi.entities;

import jakarta.persistence.*;

@Entity
public class posts {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name="your_entity_seq", initialValue=1, allocationSize=1)
    private long id;
    private String title;
    private  String description;
    private String eventImage;
    private  String qrImage;

    public posts() {
        super();
    }

    public posts(long id, String title, String description,String eventImage,String qrImage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.eventImage = eventImage;
        this.qrImage = qrImage;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public String geteventImage() {
        return eventImage;
    }

    public void seteventImage(String eventImage) {
        this.eventImage = eventImage;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQrImage() {
        return qrImage;
    }

    public void setQrImage(String qrImage) {
        this.qrImage = qrImage;
    }

    @Override
    public String toString() {
        return "post [id = "+id+",  title = "+title+",  description = "+description+",  eventImage = "+eventImage+" ,  qrImage = "+qrImage+"]";
    }
}
