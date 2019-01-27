import React, { Component } from 'react';
import KaKaoID from './SignUp/KaKaoID';
import Link from './SignUp/Link';
import Tag from './SignUp/Tag';
import FriendButton from './SignUp/PlusFriend';

import './Auth.css';

class Auth extends Component {
  state = {
    index: 1,
  };



  render() {
    const { index } = this.state;
    return (
      <div className="content">
        <div className="content__form">
        {
          index === 1 && <KaKaoID />
        }
        {
        }
        {
          index === 3 && <Link />
        }
        {
          index === 4 && <Tag />
        }
        {
          index === 5 && <FriendButton />
        }
        </div>
      </div>
    )
  }
}

export default Auth;