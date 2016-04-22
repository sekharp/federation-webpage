import React, { Component } from 'react';

const Article = React.createClass({
  render() {
    return(
      <div className="article-div">
        <div className="row">
            <div className="col-md-4">
                <img className="article-img" src="http://i.imgur.com/FTMRiSp.png"/>
            </div>
            <div className="col-md-8 article-text">
              <h5><b>Video: A Growing Number of Cylons are Feeling Misunderstood</b></h5>
              <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      </div>
    )
  }
});

export default Article;
