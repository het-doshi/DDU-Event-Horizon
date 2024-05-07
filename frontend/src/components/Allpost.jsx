import React, { useEffect, useState } from 'react';
import Header from "./Header";
import PublicPost from "./PublicPost";
import { Button } from 'reactstrap';
import admin from './Admin.JPG'
import '../styles/allpost.css'
import { useNavigate } from 'react-router-dom';

function Allpost() {
  const navigate = useNavigate();

  const [publicPosts, setPublicPosts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('option1');

  function login() {
    navigate('/Login');
  }


  function Refresh()
  {
      fetch(`http://localhost:3000/posts`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setPublicPosts(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }

  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    var userSelected = selectedOption;
    console.log(userSelected);

    if (!userSelected) {
      // Call the first API if userSelected is null
      fetch(`http://localhost:3000/posts`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setPublicPosts(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      fetch(`http://localhost:3000/posts/branch/${userSelected}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setPublicPosts(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPublicPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[]); 

  return (
    <div className="home-container">
      <Header />

      <Button className='adminLogin' onClick={login}>
        <img src={admin} style={{ height: '32px', width: '32px', position: 'relative', top: '1px', left: '-5px', borderRadius: '50%' }} alt="Admin logo" />
        Admin login
      </Button>
      {/* radio button  */}
      <form className='filter' onSubmit={handleSubmit}>
        <div className="radio"> <label> <input type="radio" value="IT" 
              checked={selectedOption === 'IT'} onChange={handleOptionChange} /> IT </label>
        </div>
        <div className="radio"> <label> <input type="radio" value="CE" 
              checked={selectedOption === 'CE'} onChange={handleOptionChange} /> CE </label>
        </div>
        <br />
        <Button className='searchButton' type='submit'>Search</Button>
        <br />
        <Button className='searchButton' color='success' onClick={Refresh}>Refresh</Button>
      </form>

      <br />
      {publicPosts.map((publicPost) => (
        <PublicPost
          key={publicPost.id}
          id={publicPost.id}
          title={publicPost.title}
          description={publicPost.description}
          timeStamp={publicPost.timeStamp}
          eventImage={publicPost.eventImage}
          qrImage={publicPost.qrImage}
        />
      ))}
      <br />
    </div>
  );
}

export default Allpost;