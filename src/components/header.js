import React, { Component } from 'react';

const Header = React.createClass({
  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src="..." />
              </a>
              <button type="button" className="btn btn-default navbar-btn">ABOUT THE CREW</button>
              <button type="button" className="btn btn-default navbar-btn">HYPERSPACE FAQS</button>
              <button type="button" className="btn btn-default navbar-btn">THE SPACECRAFT</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

export default Header;
