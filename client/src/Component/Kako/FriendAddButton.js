import React, { Component } from 'react';

class FriendAddButton extends Component {
  componentDidMount() {
    window.Kakao.init('bb4cdbcc04584832b1a2811f76db8832');
    window.Kakao.PlusFriend.createAddFriendButton({
      container: '#plusfriend-add-button',
      plusFriendId: '_Brixij',
    });
  }

  render() {
    return (
      <div>
        <div id="plusfriend-add-button" data-plusfriend-id="_xcLqmC" data-support-multiple-densities="true"></div>
      </div>
    )
  }
}

export default FriendAddButton;