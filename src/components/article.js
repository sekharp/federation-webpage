import React, { Component } from 'react';

const Article = React.createClass({
  render() {
    return(
      <div className="article-div">
        <div className="row">
            <div className="col-md-6">
                <img className="article-img" src="http://i.imgur.com/FTMRiSp.png"/>
            </div>
            <div className="col-md-6">
              <h5><b>Video: A Growing Number of Cylons are Feeling Misunderstood</b></h5>
              <p>Lorem Ipsum</p>
            </div>
        </div>
      </div>
    )
  }
});

export default Article;
