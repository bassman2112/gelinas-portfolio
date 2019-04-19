import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div key={item.name.toLowerCase().replace(/[^a-zA-Z]/g, "")} className="columns portfolio-item">

                  <div className="item-wrap">
                    <a href={`#modal_${i}`}>
                      <img alt={item.name} rel="noopener noreferrer" src={`${item.thumbnailurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}  </h5>
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div id={`modal_${i}`} className="dark-popup mfp-hide">
                        <img alt={item.name} src={`${item.imgurl}`}></img>
                          <h2 style={{margin:"8px 0px"}}>{item.name}</h2>
                          <p>{item.description}</p>
                          { item.technologies !== "" &&
                          <h5>Technologies Used:</h5>
                          }
                          <p><i>{item.technologies}</i></p>
                          
                          <p><a rel="noopener noreferrer" href={item.linkURL} target="_blank"> {item.linkText}</a></p>
                        </div>
                </div>
              )
            })
          }
          </div>
          <h1 style={{margin:"12px 0px 0px 0px"}}> My expanded portfolio is available upon request. </h1>
        </div>
      </div>
  </section>
        );
  }
}