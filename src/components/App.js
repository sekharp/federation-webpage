import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

const movieName = "Federation"

import Header from './header';

const App = React.createClass({
  render() {
    return(
      <Header title={movieName} />
    )
  }
});

export default App;
