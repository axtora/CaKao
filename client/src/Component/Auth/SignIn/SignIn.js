import React, { Component } from 'react';
import KakaoID from '../SignUp/KaKaoID';
import PassWord from '../SignUp/Password';
import './Auth.css';

class SignIn extends Component {
  render() {
    const { index, kakaoID } = this.props;

    return (
      <div className="content">
        <div className="Content__form">
          {
            index === 0 && <KakaoID index={index}/>
          }
          {
            index === 1 && <PassWord index={index} id={kakaoID} />
          }
        </div>
      </div>
    )
  }
}

export default SignIn;