import React, { Component } from 'react';
import KaKaoID from './SignUp/KaKaoID';
import PassWord from './SignUp/Password';
import Link from './SignUp/Link';
import Tag from './SignUp/Tag'; 
import FriendButton from './SignUp/PlusFriend';
import './Auth.css';

class Auth extends Component {

  render() {
    const { index, id, pwd, link, tag } = this.props;
    
    return (
      <div className="content">
        <div className="content__form">
        {
          index === 1 && <KaKaoID index={index}/>
        }
        {
          index === 2 && <PassWord index={index} id={id}/>
        }
        {
          index === 3 && <Link index={index} id={id} pwd={pwd}/>
        }
        {
          index === 4 && <Tag index={index} id={id} pwd={pwd} link={link}/>
        }
        {
          index === 5 && <FriendButton id={id} pwd={pwd} link={link} tag={tag} />
        }
        </div>
      </div>
    )
  }
}

export default Auth;