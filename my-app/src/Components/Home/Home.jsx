import React from 'react';
import './Home.css';

const HomePage = () =>
  <div className ="content-wrapper">
    <div className="container-fluid">
      <div className="center-home">
        <div className="border">
          <h1 className="text-center personal-greeting">Bryce Lennard</h1>
          <h2 className="text-center personal-greeting">   Student | Developer</h2>
          <ul className="font-awesome-icons list-unstyled">
            <li className="icons"><a href="https://www.instagram.com/bryce_lennard/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <span className="icon fa fa-instagram"></span></a>
            </li>
            <li className="icons"><a href="https://www.facebook.com/bryce.lennard" target="_blank" rel="noopener noreferrer" title="Facebook">
              <span className="icon fa fa-facebook-square"></span></a>
            </li>
            <li className="icons"><a href="https://www.linkedin.com/in/bryce-lennard-2b1137127/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <span className="icon fa fa-linkedin-square"></span></a>
            </li>
            <li className="icons"><a href="https://twitter.com/BryceLennard" target="_blank" rel="noopener noreferrer" title="Twitter">
              <span className="icon fa fa-twitter-square"></span></a>
            </li>
            <li className="icons"><a href="https://github.com/lennab1" target="_blank" rel="noopener noreferrer" title="Github">
              <span className="icon fa fa-github"></span></a>
            </li>
            <li className="icons"><a href="https://gitlab.com/BryceL" target="_blank" rel="noopener noreferrer" title="Gitlab">
              <span className="icon fa fa-gitlab"></span></a>
            </li>
            <li className="icons"><a href="mailto:lennardbryce22@gmail.com" title="Email"><span className="icon fa fa-envelope-o"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

export default HomePage;