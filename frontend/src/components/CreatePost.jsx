import React, { useState } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const branch = event.target.branch.value;

    axios.post('http://localhost:3000/posts', { title, description, branch })
      .then((response) => {
        console.log(response);
        setPostId(response.data.id);
        uploadImages(response.data.id, event.target.eventImage.files[0], event.target.qrImage.files[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [postId, setPostId] = useState(null);

  const uploadImages = (postId, eventImage, qrImage) => {
    const formDataEvent = new FormData();
    formDataEvent.append('postId', postId);
    formDataEvent.append('EventImage', eventImage);

    axios.post('http://localhost:3000/uploadImage/event', formDataEvent)
      .then((response) => {
        console.log('Event Image uploaded:', response);
      })
      .catch((error) => {
        console.log('Error uploading Event Image:', error);
      });

    const formDataQR = new FormData();
    formDataQR.append('postId', postId);
    formDataQR.append('qrImage', qrImage);

    axios.post('http://localhost:3000/uploadImage/qr', formDataQR)
      .then((response) => {
        console.log('QR Image uploaded:', response);
        toast.success("posted sucessfuully!")
      })
      .catch((error) => {
        console.log('Error uploading QR Image:', error);
        toast.error("Failed to upload post!"); 
      });
  };

  return (
    <>
      <ToastContainer />
      <Form style={{ width: "900px", marginTop: "50px", marginLeft: "280px" }} onSubmit={submitHandler}>
        <h1>Post new event!</h1>
        <br></br>
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
        <Button color="success" type="submit">Submit</Button>
        <Button color="primary" style={{marginLeft:'20px' }} onClick={() => navigate('/Home')} type="submit">Home</Button>
      </Form>
    </>
  );
}

export default CreatePost;
