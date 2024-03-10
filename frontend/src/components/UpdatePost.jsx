import React from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import {username, userid} from './Home'

function UpdatePost(props) {
  const {id} = useParams();

  
    //home
    const backToHome = () => {
      window.location.href = `/Home?id=${userid}&name=${username}`;
    };

  const submitHandler = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const branch = event.target.branch.value;

    if (!title || !description || !branch) {
      return toast.error("Please fill in all fields");
    }

    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, { title, description, branch  });
      console.log(response);
      await uploadImages(id, event.target.eventImage.files[0], event.target.qrImage.files[0]);
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error("Failed to update post. Please try again later.");
    }
  };

  const uploadImages = async (postId, eventImage, qrImage) => {
    try {
      const formDataEvent = new FormData();
      formDataEvent.append('postId', postId);
      formDataEvent.append('EventImage', eventImage);

      const responseEvent = await axios.post('http://localhost:3000/uploadImage/event', formDataEvent);
      console.log('Event Image uploaded:', responseEvent);

      const formDataQR = new FormData();
      formDataQR.append('postId', postId);
      formDataQR.append('qrImage', qrImage);

      const responseQR = await axios.post('http://localhost:3000/uploadImage/qr', formDataQR);
      console.log('QR Image uploaded:', responseQR);
      toast.success("Post updated successfully!");
    } catch (error) {
      console.error('Error uploading images:', error);
      toast.error("Failed to update post!"); 
    }
  };

  return (
    <>
      <ToastContainer />
      <Form style={{ width: "900px", marginTop: "0px", marginLeft: "280px" }} onSubmit={submitHandler}>
       <br />
        <h1>Update event Details!</h1>
        <br />
        <FormGroup>
          <Label for="title">Title</Label>
          <Input id="title" name="title" placeholder="Enter your title" type="input" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input id="description" placeholder="Write your description" name="description" type="textarea" />
        </FormGroup>
        <FormGroup>
          <Label for="branch">Branch</Label>
          <Input id="branch" placeholder="branch" name="branch" type="input" />
        </FormGroup>
        <FormGroup>
          <Label for="eventImage">Upload Event Image</Label>
          <Input id="eventImage" name="eventImage" type="file" />
          <Label for="qrImage">Upload QR Image</Label>
          <Input id="qrImage" name="qrImage" type="file" />
        </FormGroup>
        <Button color="success" type="submit">Update</Button>
        <Button color="primary" style={{marginLeft:'20px' }} onClick={backToHome} type="button">Home</Button>
      </Form>
    </>
  );
}

export default UpdatePost;
