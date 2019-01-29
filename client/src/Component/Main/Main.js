import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import Auth from '../Auth/Auth';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Auth index={1} />
      </>
    )
  }
}

export default Main;