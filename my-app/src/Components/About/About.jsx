import React, { Component } from 'react';
import './About.css';
import Image from './bitmoji.png';
import MB_Image from './mb-2016.jpg';
import BGSU from './bgsu.jpg';

const AboutPage = () =>
  <div className="AboutPage">
    <About />
  </div>

class About extends Component {
  render() {
    return(
      <div className ="content-wrapper">
        <div className="container-fluid">
          <div className="about-border">
            <h1 className="about-me">About Me</h1>
            <div className="text-justify">
              <p className="about-me-text">
                Hello! Welcome to my website, thank you for visiting. My name is Bryce Lennard, and as of the creation of this webpage, I am a Senior pursuing 
                a Bachelor of Science in Computer Science at Bowling Green State University. I am also currently looking for an entry-level position 
                in the field of Information Technology. 
              </p>
              <img className="bg-image" alt="bgsu" src={BGSU} />
              <p className="about-me-text">
                Anyway, before I get into this, I'll give you a fair warning. I'm not really all that good at talking, or in this case, writing about myself, but,
                I'll certainly try as hard as I can.
              </p>
              <p className="about-me-text">
                I love all kinds of different technology and electronics, and enjoy surfing the web to learn about crazy new ways technology is being used. 
                In fact, I try to research different technologies almost every morning. Secondly, speaking of mornings,
                I don't really like coffee, which, according to my friends, makes me "insane" haha.
                Furthermore, I love to listen to music, especially when I'm working, it just helps me think and makes the time pass faster. I also enjoy 
                reading fantasy novels, such as Brandon Sanderson's Stormlight Archives, and playing video games with close friends.
                Finally, I have a love hate relationship with the ocean, I find it both beautiful and mysterious, but, also incredibly terrifying. <br />
              </p>
              <img className="image" alt="Myrtle Beach 2018"src={MB_Image} />
              <img className="bitmoji-image" alt="bitmoji" src={Image}/>
              <p className="about-me-text">
                I have always had a admiration of technology and how it works, and enjoyed taking apart computers, ipods, and old Nintendo devices when I was younger.
                I just always wanted to figure out what made them work the way that they did. However, while I was semi-curious about hardware, it was always software
                that I was really fascinated in. In fact, when I first programmed in a game development class at my high school, I instantly fell in love with all of the
                amazing things that I was capable of doing with code, and I became determined to become a developer myself. Therefore, by the time I was 16 years old, 
                I knew exactly what I wanted to study when I went to college.
              </p>
              <p className="about-me-text">
                Fast forward a few years, and I have almost completed the CS program at BG (I only have 2 more major classes left), and I have enjoyed almost every second 
                of it. I can't wait to go into the work place and be able to do what I love everyday, while also working for a great company that will help me grow as a 
                developer and an individual.
              </p>

              <h2 className="mid-tier-titles">Skills</h2>
              <div className="programming-languages">
                <ul className="skills list-unstyled">
                  <li className="about-me-text">
                    <span className="skills-icons devicon-html5-plain-wordmark" />HTML5</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-css3-plain" />CSS3 </li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-cplusplus-plain" />C++ </li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-c-plain" />C</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-javascript-plain" />JavaScript</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-java-plain" />Java</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-jquery-plain" />JQuery</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-react-original" />React.js</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-javascript-plain" />JSX</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-python-plain" />Python</li>
                  <li className="about-me-text"> 
                    <span className="skills-icons devicon-nodejs-plain-wordmark" />Node</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-git-plain" />Git</li>
                  <li className="about-me-text">
                    <span className="skills-icons devicon-ruby-plain" />JRUBY</li>
                  <li className="about-me-text">SAP BO</li>
                  <li className="about-me-text">SAP HANA</li>
                </ul>
              </div>  
              <h2 className="mid-tier-titles">Contact Me</h2>
              <p className="about-me-text">
                Please feel free to contact me any time. <br />
                <span className="fa fa-mobile fa-lg"></span> <span className="phone">+1(419)308-5440</span><br />
                <span className="small fa fa-envelope-o"></span> <a className="email" href="mailto:BryceL@bgsu.edu">BryceL@bgsu.edu</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;