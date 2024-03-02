import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <>
        <Routes>
           <Route path="/" element={<Login/>} />
           <Route path="/Login" element={<Login/>} />
           <Route path="/Home" element={<Home/>} />
           <Route path="/CreatePost" element={<CreatePost/>} />
           <Route path="/Registration" element={<Registration/>} />
           <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
    </>
    </BrowserRouter>
  );
}
export default App;