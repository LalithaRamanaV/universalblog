import React from 'react'

export default function Topbar() {
   
    return (
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            </ul>
        </div>
        <div className="topRight">
             <img
                className="topImg"
                src="https://avatars.githubusercontent.com/u/58090261?v=4"
                alt=""
              />
             <ul className="topList">
              <li className="topListItem">Login</li>
              <li className="topListItem">Register</li>
             </ul>
            <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    );
  }