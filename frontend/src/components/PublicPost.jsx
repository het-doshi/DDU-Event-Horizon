import React from "react";
import "../styles/post.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardColumns,
} from "reactstrap";

function PublicPost(props) {

  return (
    <div className="d-flex justify-content-center mt-5">
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
            </div>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
    
  );
}
export default PublicPost;