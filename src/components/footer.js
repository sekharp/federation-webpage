import React, { Component } from 'react';

const Footer = React.createClass({
  render() {
    return(
      <div className="footer-div">
        <div className="row">
          <div className="col-md-4 footer-div-piece">
            <h5 className="footer-title-text">In The News</h5>
            <ul>
              <li><a className="footer-body-text" href="#!">Cable TV Blackout in the Twelve Colonies</a></li>
              <li><a className="footer-body-text" href="#!">Earth Appears Not to be Where it Was Before</a></li>
              <li><a className="footer-body-text" href="#!">Cloud 9 Closed for Renovation</a></li>
            </ul>
          </div>

          <div className="col-md-4 footer-div-piece">
            <h5 className="footer-title-text">Event Calendar</h5>
            <ul>
              <li><a className="footer-body-text" href="#!">Caprican Bake Sale</a></li>
              <li><a className="footer-body-text" href="#!">Annual Sixes and Eights Mixer</a></li>
              <li><a className="footer-body-text" href="#!">2015 Raptor Maintenance and Repair Conference</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title-text">So Say We All</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">When is it appropriate to high-five a commander?</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

export default Footer;
