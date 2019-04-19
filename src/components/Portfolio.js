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
                <div className="columns portfolio-item">

                  <div className="item-wrap">
                    <a href={`#modal_${i}`}>
                      <img src={`${item.thumbnailurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}  </h5>
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div id={`modal_${i}`} class="dark-popup mfp-hide">
                        <img src={`${item.imgurl}`}></img>
                          <h2 style={{margin:"8px 0px"}}>{item.name}</h2>
                          <p>{item.description}</p>
                          { item.technologies !== "" &&
                          <h5>Technologies Used:</h5>
                          }
                          <p><i>{item.technologies}</i></p>
                          
                          <p><a href={item.linkURL} onClick={`window.open(${item.linkURL})`} target="_blank"> {item.linkText}</a></p>
                        </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}