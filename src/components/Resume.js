import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const companies = [
  { src: "images/companies/ocr.png", alt: "OC Remix", url: "https://ocremix.org/" },
  { src: "images/companies/rt.jpg", alt: "Rooster Teeth", url: "https://roosterteeth.com/" },
  { src: "images/companies/ve.jpg", alt: "Visual-Eyes", url: "https://www.visual-eyes.ca" },
  { src: "images/companies/mp.png", alt: "MusicPlay", url: "https://www.musicplaycanada.com/" },
  { src: "images/companies/twitch.png", alt: "Twitch", url: "https://twitch.tv" },
  { src: "images/companies/kma.png", alt: "KMA", url: "https://www.kitsunemusicacademy.com" },
  { src: "images/companies/aw.png", alt: "AudioWorks", url: "https://www.linkedin.com/company/audioworks-technologies/about/" },
  { src: "images/companies/ig.jpg", alt: "Ingrooves Music Group", url: "https://www.ingrooves.com/" },
  { src: "images/companies/tgc.png", alt: "thatgamecompany", url: "https://thatgamecompany.com/" },
  { src: "images/companies/ms.jpg", alt: "Microsoft", url: "https://www.microsoft.ca" },
  { src: "images/companies/umg.jpg", alt: "Universal Media Group", url: "https://www.universalmusic.com/" },
  { src: "images/companies/berk.gif", alt: "Berklee", url: "https://www.berklee.edu/" },
  { src: "images/companies/mw.png", alt: "MetalWorks", url: "https://www.metalworksinstitute.com/" },
  { src: "images/companies/vx.png", alt: "VenturX", url: "https://www.venturx.ca/" },
  { src: "images/companies/ds.jpg", alt: "DealerSocket", url: "https://dealersocket.com/" },
  { src: "images/companies/pb.jpg", alt: "Plugin Boutique", url: "https://www.pluginboutique.com/" },
  { src: "images/companies/fs.jpg", alt: "FlexiShip", url: "https://www.flexiship.ca/" },
];

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

          <Swiper
            className="coverflow-resume"
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={true}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              900: { slidesPerView: 5 },
            }}
          >
            {companies.map((company) => (
              <SwiperSlide key={company.alt}>
                <img
                  src={company.src}
                  alt={company.alt}
                  style={{ cursor: "pointer", width: "100%", height: "auto" }}
                  onClick={() => window.open(company.url, "_blank", "noopener,noreferrer")}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>
              These bars denote a subjective <b><i>comfort level</i></b> with each skill. I am always looking to learn more, and am passionate about continually improving my skills!
            </p>
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
