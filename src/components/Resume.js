import React, { Component } from "react";
import Coverflow from "react-coverflow";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div
                    className="row item"
                    key={
                      item.CompanyName +
                      item.YearOfLeaving +
                      item.specialization
                    }
                  >
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfJoining} {item.YearOfJoining} -{" "}
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className="row item" key={item.UniversityName}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Description}</p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>companies</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              These are companies with which I have worked in a direct capacity
              - be it as an employee, partner, contributor, or consultant on
              their projects. Clicking on a company's logo will bring you to
              their site so you can learn more about them!
            </p>
            <p>
              {" "}
              Due to ongoing Non-Disclosure Agreements, I am unable to publicly
              share code and examples from all of these projects, but please
              contact me if you would like to know more.
            </p>
          </div>

          <Coverflow
            className="coverflow-resume"
            displayQuantityOfSide={3}
            infiniteScroll
            enableHeading={false}
            media={{
              "@media (max-width: 900px)": {
                width: "100%",
                height: "140px"
              },
              "@media (min-width: 900px)": {
                width: "100%",
                height: "200px"
              }
            }}
          >
            <img
              src="images/companies/ocr.png"
              alt="OC Remix"
              data-action="https://ocremix.org/"
            />
            <img
              src="images/companies/rt.jpg"
              alt="Rooster Teeth"
              data-action="https://roosterteeth.com/"
            />
            <img
              src="images/companies/ve.jpg"
              alt="Visual-Eyes"
              data-action="https://www.visual-eyes.ca"
            />
            <img
              src="images/companies/mp.png"
              alt="MusicPlay"
              data-action="https://www.musicplaycanada.com/"
            />
            <img
              src="images/companies/twitch.png"
              alt="Twitch"
              data-action="https://twitch.tv"
            />
            <img
              src="images/companies/kma.png"
              alt="KMA "
              data-action="https://www.kitsunemusicacademy.com"
            />
            <img
              src="images/companies/aw.png"
              alt="AudioWorks"
              data-action="https://www.linkedin.com/company/audioworks-technologies/about/"
            />
            <img
              src="images/companies/ms.jpg"
              alt="Microsoft"
              data-action="https://www.microsoft.ca"
            />
            <img
              src="images/companies/berk.gif"
              alt="Berklee"
              data-action="https://www.berklee.edu/"
            />
            <img
              src="images/companies/mw.png"
              alt="MetalWorks"
              data-action="https://www.metalworksinstitute.com/"
            />
            <img
              src="images/companies/vx.png"
              alt="VenturX"
              data-action="https://www.venturx.ca/"
            />
            <img
              src="images/companies/ds.jpg"
              alt="DealerSocket"
              data-action="https://dealersocket.com/"
            />
            <img
              src="images/companies/pb.jpg"
              alt="Plugin Boutique"
              data-action="https://www.pluginboutique.com/"
            />
            <img
              src="images/companies/fs.jpg"
              alt="FlexiShip"
              data-action="https://www.flexiship.ca/"
            />
          </Coverflow>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li
                        key={item.skillname
                          .toLowerCase()
                          .replace(/[^a-zA-Z]/g, "")}
                      >
                        <span
                          className={`bar-expand ${item.skillname
                            .toLowerCase()
                            .replace(/[^a-zA-Z]/g, "")}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
