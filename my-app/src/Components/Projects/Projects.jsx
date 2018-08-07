import React, { Component } from 'react';
import './Projects.css';
import HomeScreen from './CIU_Home.PNG';
import SignUpScreen from './Sign_Up.PNG';
import TOCScreen from './TOC.PNG';
import CalendarScreen from './Calendar.PNG';

const ProjectsPage = () =>
  <div className="ProjectPage">
    <SignificantProjects />
  </div>

class SignificantProjects extends Component {

  OpenModal(id) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("img").src = document.getElementById(id).src;
    document.getElementById("caption").innerHTML = "Click Anywhere Outside Modal To Close";
  }

  CloseModal = (e) => {
    var element = document.getElementById("modal")
    if (e.target === element) {
        element.style.display = "none";
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.CloseModal);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.CloseModal);
  }

  render() {
    return ( 
      <div className ="content-wrapper">
        <div className="container-fluid">
          <div className="project-border">
            <h1 className="my-projects">My Projects</h1>
              <div className="text-justify">
                <h2 className="project">Personal Website</h2>
                  <p className="project-text">
                    I feel like I should start off by saying that the website that you are currently browsing was a pretty significant project for me. 
                    Built using React.js and bootstrap, I began developing it in the summer between my junior and senior years of university. 
                    It took me about two week to fully develop, and I faced many difficulties during the development period. (Of course, some of those difficulties
                    could have been avoided had I thought things through before just coding :P.) It was a great learning experience, and I hope you like the site 
                    because I am pretty proud of it. Feel free to look at all of the code for the project on my github account.
                  </p>
                <h2 className="project">Change It Up</h2>
                  <p className="project-text">
                    In the spring semester of my Junior year at BGSU, I took a Software Engineering Project class. During which, me, and the three other students in my group developed a website
                    and mobile applications for our client Steven Cady. Our task was to develop an application where users could read a pdf version of the newest release of The Change
                    Handbook, a textbook on change methods that Steve had been working on, with co-authors, for years. We built the apps using React.js and React Native, for the website
                    and phone applications respectively. While we used Google's Firebase as our BAAS (Backend As A Service). This was one of the first projects that I ever had where I 
                    set up the framework, and connected with a database. Furthermore, I also became familiar with Jest, writing well over 100 unit tests for our React application. 
                    Finally, the biggest thing that I took away from this project is...to always remember to double check the dependencies, because that caused my group and I quite a few 
                    headaches over the semester.
                  </p>
                  <div className="screenshots">
                    <img src={HomeScreen} alt="Change-It-Up-Homescreen" className="Image" id="Change-It-Up-Homescreen" onClick={() => this.OpenModal("Change-It-Up-Homescreen")}/>
                    <img src={SignUpScreen} alt="Change-It-Up-Sign-Up" className="Image" id="Change-It-Up-Sign-Up" onClick={() => this.OpenModal("Change-It-Up-Sign-Up")}/>
                    <img src={TOCScreen} alt="Change-It-Up-Table-Of-Contents" className="Image" id="Change-It-Up-Table-Of-Contents" onClick={() => this.OpenModal("Change-It-Up-Table-Of-Contents")}/>
                    <img src={CalendarScreen} alt="Change-It-Up-Calendar" className="Image" id="Change-It-Up-Calendar" onClick={() => this.OpenModal("Change-It-Up-Calendar")}/>
                  </div>
                  <div className="modal" id="modal">
                    <img className="modal-content" id="img" alt="modal-img"/>
                    <div className="caption" id="caption"></div>
                    <p className="close" id="close"></p>
                  </div>
                <h2 className="project">Udemy Projects</h2>
                  <p className="project-text">
                    I'm currently taking some Udemy courses. I may post some of the programs they have me code, if they arn't on here, they 
                    will either be on my github or gitlab accounts.
                  </p>
                <h2 className="project">Git</h2>
                  <div className="git">
                    <span className="fa fa-github"></span> <a className="github" href="https://github.com/lennab1" target="_blank" rel="noopener noreferrer">Github</a><br />
                    <span className="fa fa-gitlab"></span> <a className="gitlab" href="https://gitlab.com/BryceL" target="_blank" rel="noopener noreferrer">Gitlab</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;