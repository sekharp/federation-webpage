import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

import Navbar from './navbar'
import Header from './header';
import Article from './article';
import Image from './image';
import Footer from './footer';

const movieName = "Federation"

const App = React.createClass({
  render() {
    return(
      <div>
        <Navbar />
        <Header title={movieName} />
        <Article />
        <Image />
        <Footer />
      </div>
    )
  }
});

export default App;
