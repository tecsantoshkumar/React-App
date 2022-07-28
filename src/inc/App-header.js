import React from "react";
import logo from ".././logo.svg";
// import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "@react-icons/fa";

const AppHeader = () => {
  return (
      <header className="App-header">
      <div className="App-logo">
              <h1><span>T</span>ec <span>S</span>antosh <span>K</span>umar</h1>
      </div>
      <div className="App-link">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
       {/* 3rd div is for social media links */}
      <div className="App-social">
        {/* <ul className="">
          <li><a href="#"><FaFacebookSquare/></a></li>
          <li><a href="#"><FaInstagramSquare/></a></li>
          <li><a href="#"><FaYoutubeSquare/></a></li>
        </ul> */}
      </div>

      </header>
  );
}

export default AppHeader;
