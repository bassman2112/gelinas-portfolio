import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio'; 
import ThisApp from '../components/ThisApp';
import Footer from '../components/Footer';
import resumeData from '../resumeData';

// Use Testimonials if you want! I don't use it. 
//import Testimonials from  './components/Testimonials';

class Home extends Component {
  render() {
    return (

        <div className="Home">
          <Header resumeData={resumeData}/>
          <About resumeData={resumeData}/>
          <Resume resumeData={resumeData}/>
          <Portfolio resumeData={resumeData}/>
          <ThisApp resumeData={resumeData}/>
          <Footer resumeData={resumeData}/>
        </div>

    );
  }
}

export default Home;
