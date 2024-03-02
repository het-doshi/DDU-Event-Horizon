import React from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdatePost(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const branch = event.target.branch.value;

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
      toast.error("Failed to upload images!"); 
    }
  };

  return (
    <>
      <ToastContainer />
      <Form style={{ width: "900px", marginTop: "50px", marginLeft: "280px" }} onSubmit={submitHandler}>
        <h1>Update event Details!</h1>
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
        <Button color="success" type="submit">Update</Button>
        <Button color="primary" style={{marginLeft:'20px' }} onClick={() => navigate('/Home')} type="button">Home</Button>
      </Form>
    </>
  );
}

export default UpdatePost;
