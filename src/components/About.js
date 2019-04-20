import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt=""
              align="center"
            />
            <ul className="social" align="center">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li key={item.name}>
                      <a
                        rel="noopener noreferrer"
                        href={item.url}
                        target="_blank"
                      >
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
