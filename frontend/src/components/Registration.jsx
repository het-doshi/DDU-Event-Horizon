import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardSubtitle,
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Login.css";

function Registration() {

    const navigate = useNavigate();

    const submitHandler = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const email = event.target.email.value; 
      const password = event.target.password.value; 
      const registerby = event.target.registerby.value; 

      if (!registerby ||!username || !email || !password) {
        return toast.error("Please fill in all fields");
      }
      else{
        
        axios.post('http://localhost:3000/users', { registerby, username, email, password })
        .then((response) => {
          console.log(response);
          toast.success("Registered sucessfuully!")
        })
        .catch((error) => {
          console.log(error);
          toast.error("Registration Failed!")
        });
      }
    };

  return (
    <>
    <ToastContainer />
      <Card className="cardBody">
        <CardBody>
          <CardTitle className="loginTittle" tag="h2">Registration</CardTitle>
          <br />
          <img alt="ddu logo" src="https://images.shiksha.com/mediadata/images/1631617292phpdoIYuQ.jpeg"/>
          <br />
          <CardSubtitle className="mb-2 text-muted subtitle stitle" tag="h6">DDU Event Horizon</CardSubtitle>
          <Form className="rform" onSubmit={submitHandler}>
                <FormGroup>
                <Label for="registerby" hidden>Register by</Label>
                <Input id="registerby" name="registerby" placeholder="username of existing member" type="registerby"  style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <FormGroup>
                <Label for="username" hidden>Username</Label>
                <Input id="username"name="username" placeholder="username" type="input"   style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <FormGroup>
                <Label for="email" hidden> Email</Label>
                <Input id="email"name="email" placeholder="email" type="email"   style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <FormGroup>
                <Label for="password" hidden> Password</Label>
                <Input id="password" name="password" placeholder="Password" type="password"  style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <Button className="submit"  type="submit" color="success">Register</Button>
                <Button className="submit" color="primary" onClick={() => navigate('/Login')} >Login </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
export default Registration;
