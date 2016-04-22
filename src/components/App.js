import React, { Component } from 'react';

import '../assets/stylesheets/base.scss';

import Header from './header';
import Article from './article';
import Banner from './banner';
import Footer from './footer';

const App = React.createClass({
  render() {
    return(
      <div>
        <Header />
        <Article />
        <Banner />
        <Footer />
      </div>
    )
  }
});

export default App;
