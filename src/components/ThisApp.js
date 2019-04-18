import React, { Component } from 'react';
export default class ThisApp extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="twelve columns">
              <p className="lead">
              This site was built by Alex Gelinas using React. 
              <a target= "_blank" href={resumeData.thisApp}> You can download and use it by clicking here. </a>
              </p>
            </div>
          </div>
        </section>
        );
  }
}