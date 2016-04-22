import React, { Component } from 'react';

var brandStyle = {height: 40};
var naStyle = {height: 40};

const Header = React.createClass({
  render() {
    return(
      <div>
        <nav className="navbar navbar-default transparent">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" style={brandStyle} src="http://i.imgur.com/Jdwd8N5.png" />
              </a>
              <a type="button" className="btn navbar-btn">ABOUT THE CREW</a>
              <a type="button" className="btn navbar-btn">HYPERSPACE FAQS</a>
              <a type="button" className="btn navbar-btn">THE SPACECRAFT</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

export default Header;
