import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Post from "./post";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import './home.css'

function Home() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  const id = params.get('id');



  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`http://localhost:3000/posts/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },); 



  const createpost = () => {
    navigate(`/CreatePost/${id}/${name}`);
  };


  return (
    <div className="home-container">
     < Header/>
      <Button color="success" onClick={createpost} className='createpost'>Create Post</Button>
      <Button className="logoutBtn" color="danger" onClick={() => navigate('/')}>Logout</Button>
      <div className='userinfo'>
       <h3>welcome {name} !</h3>
      </div>
      <br />
      {posts.map((post) => (
        <Post
          key ={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          timeStamp={post.timeStamp}
          eventImage={post.eventImage}
          qrImage={post.qrImage}
        />
      ))}
      <br />
      <br />
    </div>
  );
}

const params = new URLSearchParams(window.location.search);
const username = params.get('name');
const userid = params.get('id');
export { Home, username, userid };
export default Home;
