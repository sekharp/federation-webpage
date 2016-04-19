import React, { Component } from 'react';

import '../assets/stylesheets/base.scss';

import Navbar from './navbar'
import Header from './header';
import Article from './article';
import Image from './image';
import Footer from './footer';

const App = React.createClass({
  render() {
    return(
      <div>
        <Header />
        <Article />
        <Image />
        <Footer />
      </div>
    )
  }
});

export default App;
