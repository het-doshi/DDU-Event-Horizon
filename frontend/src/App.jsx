import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Allpost from "./components/Allpost"


function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F7F2EB', minHeight: '100vh' }}>
        <Routes>
           <Route path="/" element={<Allpost/>} />
           <Route path="/Login" element={<Login/>} />
           <Route path="/Home" element={<Home/>} />
           <Route path="/CreatePost" element={<CreatePost/>} />
           <Route path="/Registration" element={<Registration/>} />
           <Route path="/update" element={<UpdatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;