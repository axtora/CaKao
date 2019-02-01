import React, { Component } from 'react';
import KakaoID from '../SignUp/KaKaoID';
import PassWord from '../SignUp/Password';
import '../Auth.css';

class SignIn extends Component {
  render() {
    const { signin, kakaoID } = this.props;

    return (
      <div className="content">
        <div className="Content__form">
          {
            signin === 0 && <KakaoID signin={signin}/>
          }
          {
            signin === 1 && <PassWord signin={signin} id={kakaoID} label={'패스워드를 입력하세요.'} />
          }
        </div>
      </div>
    )
  }
}

export default SignIn;