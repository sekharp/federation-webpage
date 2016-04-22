import React, { Component } from 'react';

const Footer = React.createClass({
  render() {
    return(
      <div className="footer-div">
        <div className="row">
          <div className="col-md-4 footer-div-piece">
            <h5 className="footer-title-text">IN THE NEWS</h5>
            <a className="footer-body-text" href="#!">Cable TV Blackout in the Twelve Colonies</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a><br />
            <a className="footer-body-text" href="#!">Earth Appears Not to be Where it Was Before</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a><br />
            <a className="footer-body-text" href="#!">Cloud 9 Closed for Renovation</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a>
          </div>

          <div className="col-md-4 footer-div-piece">
            <h5 className="footer-title-text">EVENT CALENDAR</h5>
            <a className="footer-body-text" href="#!">Caprican Bake Sale</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a><br />
            <a className="footer-body-text" href="#!">Annual Sixes and Eights Mixer</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a><br />
            <a className="footer-body-text" href="#!">2015 Raptor Maintenance and Repair Conference</a><br />
            <span className="glyphicon glyphicon-calendar" aria-hidden="true" /><a className="footer-date-text" href="#!"> Tuesday, September 16, 2014</a>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title-text">SO SAY WE ALL</h5>
            <img src="http://i.imgur.com/VvpVAcY.png" />
            <a className="footer-body-text">When is it appropriate to high-five a commander?</a>
          </div>
        </div>
      </div>
    )
  }
});

export default Footer;
