import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <>
        <Routes>
           <Route path="/" element={<Login/>} />
           <Route path="/CreatePost" element={<CreatePost/>} />
           <Route path="/update/:id" element={<UpdatePost />} />
        </Routes>
    </>
    </BrowserRouter>
  );
}
export default App;