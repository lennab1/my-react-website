import React, { Component } from 'react';
import './NavBar.css';
import Resume from './Bryce Lennards Resume.pdf';

class NavBar extends Component {
  state = {
    background: "linear-gradient(to left, #333333, #6a6a6a 25%, #333333 100%, #333333 25%)",
    className: "fa fa-caret-right",
  }

  transparentNavScroll = (e) => {
    if(window.scrollY > 64) {
      this.setState({background: "linear-gradient(to left, #33333380, #6a6a6a 25%, #33333380 100%, #33333380 25%)"});
    }
    else {
      this.setState({background: "linear-gradient(to left, #333333, #6a6a6a 25%, #333333 100%, #333333 25%)"});
    }
  }

  animatedCaret = (e) => {
    if(this.state.className === "fa fa-caret-right") {
      this.setState({className: "fa fa-caret-down"})
      document.getElementById("dropdown-menu").style.display = "block";
    }
    else {
      this.setState({className: "fa fa-caret-right"})
      document.getElementById("dropdown-menu").style.display = "none";
    }
    e.stopPropagation();
  }

  resetCaret = (e) => {
    this.setState({className: "fa fa-caret-right"})
    document.getElementById("dropdown-menu").style.display = "none";
  }
  
  componentDidMount() {
      var element = document.location.pathname;
      if(element === '/'){
        document.getElementById("brandLink").classList.add("current-page")
      }
      else if(element === '/projects'){
        document.getElementById("projectLink").classList.add("current-page")
      }
      else if(element === '/about'){
        document.getElementById("aboutLink").classList.add("current-page")
      }

    document.addEventListener("scroll", this.transparentNavScroll);
    document.getElementById("dropdown-anchor").addEventListener("click", this.animatedCaret);
    document.addEventListener("click", this.resetCaret);
  }

  componentWillUnmount() {
     document.removeEventListener("scroll", this.transparentNavScroll);
     document.getElementById("dropdown-anchor").removeEventListener("click", this.animatedCaret);
     document.removeEventListener("click", this.checkIfCaretIsDown);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top screen-lg" style={{background: this.state.background}} id="bootstrap-navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="fa fa-bars"></span>
            </button>
            <li className="list-unstyled hover-link" id="brandLink">
            <a className="navbar-brand" href="./"><span className="small-icon fa fa-home"></span>Bryce Lennard</a></li>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="hover-link">
                <a className="my-nav-link" href={Resume} target="_blank" rel="noopener noreferrer">
                  <span className="small-icon fa fa-file-pdf-o"></span>
                  Resume/Portfolio
                </a>
              </li>
              <li className="hover-link" id="projectLink">
                <a className="my-nav-link" href="./projects">
                  <span className="small-icon fa fa-file-code-o"></span>
                  Significant Projects
                </a>
              </li>
              <li className="hover-link" id="aboutLink">
                <a className="my-nav-link" href="./about">
                  <span className="small-icon fa fa-info"></span>
                  About Me
                </a>
              </li>
              <li className="hover-link">
                <a className="my-nav-link" href="https://github.com/lennab1" target="_blank" rel="noopener noreferrer">
                  <span className="small-icon fa fa-github"></span>
                  GitHub
                </a>
              </li>
              <li className="hover-link">
                <a className="my-nav-link" href="https://gitlab.com/BryceL" target="_blank"rel="noopener noreferrer">
                  <span className="small-icon fa fa-gitlab"></span>
                  GitLab
                </a>
              </li>
              <li className="dropdown hover-link">
                <a href="##" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="dropdown-anchor">
                  <span className="small-icon fa fa-handshake-o"></span>Follow Me
                  <span className={this.state.className} id="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown-menu">
                  <li>
                    <a className="my-dropdown-nav-link" href="https://www.instagram.com/bryce_lennard/" target="_blank" rel="noopener noreferrer">
                      <span className="small-icon fa fa-instagram"></span>
                      Instagram
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a className="my-dropdown-nav-link" href="https://www.facebook.com/bryce.lennard" target="_blank" rel="noopener noreferrer">
                      <span className="small-icon fa fa-facebook-square"></span>
                      Facebook
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a className="my-dropdown-nav-link" href="https://www.linkedin.com/in/bryce-lennard-2b1137127/" target="_blank" rel="noopener noreferrer">
                      <span className="small-icon fa fa-linkedin-square"></span>
                      LinkedIn
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a className="my-dropdown-nav-link" href="https://twitter.com/BryceLennard" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <span className="small-icon fa fa-twitter-square"></span>
                      Twitter
                    </a> 
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="hover-link">
                <a className="my-right-nav-link" href="mailto:lennardbryce22@gmail.com">
                  <span className="small-icon fa fa-envelope-o"></span>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;