import React, { Component } from 'react';
export default class ThisApp extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              This site was built by Alex Gelinas using React. You can download it here:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <a>
                  {resumeData.thisApp}
                </a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}