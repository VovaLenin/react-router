import React from "react";
import NavBar from "./components/navBar.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home.jsx";
import Dashboard from "./components/dashboard.jsx";
import Login from "./components/login.jsx";
import Posts from "./posts.jsx";
import NotFound from "./components/notFound.jsx";

function App() {
  return (
    <>
      <h1>App</h1>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="posts/:postId?" element={<Posts />} />
        <Route path="admin" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </>
  );
}

export default App;
