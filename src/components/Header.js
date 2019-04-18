import React, { Component } from 'react';
import ParticleContainer from './ParticleContainer';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>    
      <header id="home">
      
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> 
                  ^^^ I am not using this, but remove comment if you'd like! */}
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
               
         <div className="row banner">  
           
            <div id="particles-js">
              <ParticleContainer />
            </div> 

            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I'm {resumeData.name}.</h1>
               {/*<h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
                Uncomment this for some dynamic header data! */}
               <hr/>
               
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

         

      </header>
      </React.Fragment>
    );
  }
}