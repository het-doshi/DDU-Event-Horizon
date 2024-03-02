import React from "react";
import "./post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardColumns,
  Button,
} from "reactstrap";

function Post(props) {
  const navigate = useNavigate();
  const { id } = props;

  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(response => {
        toast.success("this post deleted sucessfully")
        console.log('Post deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting post:', error);
        toast.error("failed to delete this post ")
      });
  }
  
  return (
    <div className="d-flex justify-content-center mt-5">
      <ToastContainer />
      <CardColumns>
        <Card className="mb-2" style={{ width: "900px", marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-6">
              <CardImg className="postImg" alt="first Image"
                 src={props.eventImage}
                 style={{ width: "599px", height: "243px", borderRadius: "5px 0 0 0" }}
              />
            </div>
            <div className="col-md-6">
              <CardImg className="scanerImg" alt="second Image" 
                 src={props.qrImage}
                 style={{ width: "299px", height: "243px", marginLeft: "138px", borderRadius: "0 5px 0 0",}}
              />
            </div>
          </div>
          <CardBody>
            <CardTitle tag="h3">{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <CardText><small className="text-muted">{props.timeStamp}</small></CardText>
            <div className="d-flex justify-content-end">
              <Button color="primary" onClick={handleUpdate}>Update</Button>
              <Button color="danger" className="Button" onClick={handleDelete} >Delete</Button>
            </div>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
    
  );
}
export default Post;