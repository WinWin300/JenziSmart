import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>AI-Driven Construction Project Marketplace</h1>
      <p>Connecting clients, contractors, and suppliers seamlessly.</p>
      <Link to="/signup" className="btn btn-primary m-2">
        Sign Up
      </Link>
      <Link to="/login" className="btn btn-secondary">
        Login
      </Link>
    </div>
  );
};

export default Home;

