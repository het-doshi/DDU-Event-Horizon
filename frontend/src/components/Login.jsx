import React from "react";
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    var name;
    var id;

    if (!username || !password ) {
      return toast.error("empty credentials");
    }
    else
    {
      axios.post('http://localhost:3000/login', { username, password})
      .then((response) => {
        console.log(response);
        if(response.status !== 200)
        {
          return toast.error("invalid credentials");
        }
        name = response.data.username;
        id = response.data.id;
        window.location.href = `/Home?name=${name}&id=${id}`;
        toast.success("Login sucessfuully!")
      })
      .catch((error) => {
        console.log(error);
        toast.error("invalid credentials")
      });
    }
  };

  return (
    <>
    <ToastContainer />
      <Card className="cardBody">
        <CardBody>
          <CardTitle className="loginTittle" tag="h2">Login</CardTitle>
          <br />
          <img alt="ddu logo" src="https://images.shiksha.com/mediadata/images/1631617292phpdoIYuQ.jpeg"/>
          <br />
          <CardSubtitle className="mb-2 text-muted subtitle" tag="h6">DDU Event Horizon</CardSubtitle>
          <Form onSubmit={submitHandler}>
                <FormGroup>
                <Label for="username" hidden> Username</Label>
                <Input id="username"name="username" placeholder="username" type="input"   style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <FormGroup>
                <Label for="password" hidden> Password</Label>
                <Input id="password" name="password" placeholder="Password" type="password"  style={{ width: "70%", marginLeft:"80px" }}/>
                </FormGroup>
                <Button className="submit" color="success" type="submit">Login</Button>
                <Button className="submit" color="dark" onClick={() => navigate('/Registration')}>Register</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
export default Login;
