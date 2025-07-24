import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Ui/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-root">
      <div className="home-content">
        <h1 className="home-title">Welcome To Productify</h1>
        <p className="home-desc">
          Explore awesome Products, Order Online Today | Great Quality Products,
          Members Can Enjoy Unlimited Free Shipping, Early Access To Lightning
          Deals and More. Shop our wide range of selection at affordable prices.
        </p>
        <Link to="/dashboard">
          <button className="pip">Go to Dashboard</button>
        </Link>
      </div>

      <footer className="home-footer">
        © {new Date().getFullYear()} Productify. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
