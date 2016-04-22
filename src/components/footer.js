import React, { Component } from 'react';

const Footer = React.createClass({
  render() {
    return(
      <div className="footer-div">
        <div className="row">
          <div className="col-md-6">
            <h5 className="white-text">About Us</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Overview</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">How It Works</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Lend</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Developers</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

export default Footer;
