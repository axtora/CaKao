import React, { Component } from 'react';
import FriendAddButton from '../../Kako/FriendAddButton';
import axios from 'axios';

class PlusFriend extends Component {
  state = {
    index: 0,
  }

  onClickEvent = () => {
    this.setState(
      ({ index }) => ({
        index: index + 1
      })
    )
  }

  render() {
    const { index } = this.state;
    const { id, pwd, link, tag } = this.props;

    const onClickJoin = () => {
      axios.post('/auth/signup', {
        kakao_id: id,
        password: pwd,
        url: link,
        tag: tag,
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
    }


    index === 1 && console.log(id, pwd, link, tag)

    const addFriendComponent = (
      <div>
        <b className="content__title">플러스 친구를 해주세요.</b>
        <div className="content__form mt-1 text-center" onClick={this.onClickEvent}>
          <FriendAddButton />
        </div> 
      </div>
    ) 

    const SendCaKaoSignUpData = (
      <div>
        <div className="text-center next mt-1">
          <span onClick={onClickJoin}>가입요청</span>
        </div>
        <form >

        </form>
      </div>
    )


    
    return (
      <>
       {
         index === 0 ? addFriendComponent : index === 1 ? SendCaKaoSignUpData : console.log('a')
       }
      </>
    )
  }
}    

export default PlusFriend;