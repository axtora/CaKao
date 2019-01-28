import React, { Component } from 'react';
import FriendAddButton from '../../Kako/FriendAddButton';

class PlusFriend extends Component {
  render() {
    return (
      <>
        <b className="content__title">플러스 친구를 해주세요.</b>
        <div className="content__form mt-1 text-center">
          <FriendAddButton />
        </div> 
      </>
    )
  }
}    

export default PlusFriend;