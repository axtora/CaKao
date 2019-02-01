import React, { Component } from 'react';
import Header from '../../Component/Header/Header';
import Auth from '../Auth/Auth';
import SignIn from '../Auth/SignIn/SignIn';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Auth index={1}/>
      </>
    )
  }
}

export default Main; 