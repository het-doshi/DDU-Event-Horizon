import React, { useState } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";

function CreatePost() {

  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state.responseData;
  const id = responseData.id;
  
  
  //home
  const backToHome = () => {
    navigate('/Home', { state: { responseData: responseData } });
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
      const response = await axios.post(`http://localhost:3000/posts/${id}`, { title, description, branch });
      console.log(response);
      setPostId(response.data.id);
      await uploadImages(response.data.id, event.target.eventImage.files[0], event.target.qrImage.files[0]);
      toast.success("Posted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to post!");
    }
  };

  const [postId, setPostId] = useState(null);
  console.log(postId)
  const uploadImages = async (postId, eventImage, qrImage) => {
    const formDataEvent = new FormData();
    formDataEvent.append('postId', postId);
    formDataEvent.append('EventImage', eventImage);

    try {
      const responseEvent = await axios.post('http://localhost:3000/uploadImage/event', formDataEvent);
      console.log('Event Image uploaded:', responseEvent);
    } catch (error) {
      console.log('Error uploading Event Image:', error);
    }

    const formDataQR = new FormData();
    formDataQR.append('postId', postId);
    formDataQR.append('qrImage', qrImage);

    try {
      const responseQR = await axios.post('http://localhost:3000/uploadImage/qr', formDataQR);
      console.log('QR Image uploaded:', responseQR);
    } catch (error) {
      console.log('Error uploading QR Image:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form style={{ width: "900px", marginTop: "0px", marginLeft: "280px" }} onSubmit={submitHandler}>
        <br />
        <h1>Post new event!</h1>
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
        <button className="btn btn-success" type="submit">Submit</button>
        <Button color="primary" style={{marginLeft:'20px' }} onClick={backToHome} type="button">Home</Button>
      </Form>
    </>
  );
}

export default CreatePost;
