import React, { Component } from 'react';
import KaKaoID from './SignUp/KaKaoID';
import PassWord from './SignUp/Password';
import Link from './SignUp/Link';
import Tag from './SignUp/Tag';
import FriendButton from './SignUp/PlusFriend';
import './Auth.css';

class Auth extends Component {
  render() {
    const { index } = this.props;
    
    return (
      <div className="content">
        <div className="content__form">
        {
          index === 1 && <KaKaoID index={index}/>
        }
        {
          index === 2 && <PassWord index={index} />
        }
        {
          index === 3 && <Link index={index} />
        }
        {
          index === 4 && <Tag index={index} />
        }
        {
          index === 5 && <FriendButton index={index} />
        }
        </div>
      </div>
    )
  }
}

export default Auth;