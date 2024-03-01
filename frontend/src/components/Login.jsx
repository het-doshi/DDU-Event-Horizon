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
import "./Login.css";

function Login() {
  return (
    <>
      <Card className="cardBody">
        <CardBody>
          <CardTitle className="loginTittle" tag="h2">Login</CardTitle>
          <br />
          <img alt="ddu logo" src="https://images.shiksha.com/mediadata/images/1631617292phpdoIYuQ.jpeg"/>
          <br />
          <CardSubtitle className="mb-2 text-muted subtitle" tag="h6">DDU Event Horizon</CardSubtitle>
          <Form>
                <FormGroup>
                <Label for="exampleEmail" hidden> Email</Label>
                <Input id="exampleEmail"name="email" placeholder="Email" type="email"/>
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword" hidden> Password</Label>
                <Input id="examplePassword" name="password" placeholder="Password" type="password"/>
                </FormGroup>
                <Button className="submit" color="success">Login</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
export default Login;
