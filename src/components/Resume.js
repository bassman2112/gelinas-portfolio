import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item" key={item.UniversityName}>
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Description}
                          </p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item" key={item.CompanyName + item.YearOfLeaving + item.specialization}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
            </div>
            <div className="row work">
            <div className="three columns header-col">
               <h1><span>companies</span></h1>
            </div>
            <div className="nine columns main-col">
            <p >
            These are companies with which I have worked in a direct capacity - be it as an employee, partner, contributor, or consultant on their projects. 
            Clicking on a company's logo will bring you to their site so you can learn more about them!
            </p>
            <p> Due to ongoing
            Non-Disclosure Agreements, I am unable to publicly share code and examples from all of these projects, but please contact me if you would like to know more.
            </p>

            </div>

            
 
   
            <Coverflow 
          className="coverflow-resume"
          displayQuantityOfSide={3}
          infiniteScroll
          enableHeading={false}
          media={{
            '@media (max-width: 900px)': {
              width: '100%',
              height: '140px',
            },
            '@media (min-width: 900px)': {
              width: '100%',
              height: '200px'
            }
          }}
        >
            <img src="http://i.imgur.com/myYchXI.png" alt="OC Remix" data-action="http://ocremix.org/" />
            <img src="http://i.imgur.com/UtwBJjK.jpg" alt="Rooster Teeth" data-action="http://roosterteeth.com/"/>
            <img src="http://i.imgur.com/PJbA2Fb.jpg" alt="Visual-Eyes" data-action="http://www.visual-eyes.ca" />
            <img src="http://i.imgur.com/0LTykBi.png" alt="MusicPlay" data-action="http://www.musicplaycanada.com/" />
            <img src="http://i.imgur.com/YC6qP6o.png" alt="Twitch" data-action="http://twitch.tv" />
            <img src='http://i.imgur.com/lh8JAIk.png' alt='KMA ' data-action="http://www.kitsunemusicacademy.com"/>
            <img src="http://i.imgur.com/F1YqA2R.png" alt="AudioWorks" data-action="http://www.linkedin.com/company/audioworks-technologies/about/" />
            <img src='http://i.imgur.com/LPc4Xkj.jpg' alt='Microsoft' data-action="http://www.microsoft.ca"/>
            <img src="http://i.imgur.com/0EYcj6T.gif" alt="Berklee" data-action="http://www.berklee.edu/" />
            <img src='http://i.imgur.com/jp6r3E7.png' alt='MetalWorks' data-action="http://www.metalworksinstitute.com/"/>
            <img src='http://i.imgur.com/OA1dPKf.png' alt='VenturX' data-action="http://www.venturx.ca/"/>
            <img src="http://i.imgur.com/OrOvkEK.jpg" alt='DealerSocket' data-action="http://dealersocket.com/" />
            <img src="http://i.imgur.com/1EqjaWb.jpg" alt='Plugin Boutique' data-action="http://www.pluginboutique.com/" />
            <img src='http://i.imgur.com/NvFAHzS.jpg' alt='FlexiShip' data-action="http://www.flexiship.ca/"/>

   

        </Coverflow>
        </div>
   


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li key={item.skillname.toLowerCase().replace(/[^a-zA-Z]/g, "")}>
                      <span className={`bar-expand ${item.skillname.toLowerCase().replace(/[^a-zA-Z]/g, "")}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}