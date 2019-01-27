import React, { Component } from 'react';
import PassWord from './Password';
import TextField from '@material-ui/core/TextField';

class KaKaoID extends Component {
  state = {
    kakao_id: '',
  }

  enterEvent = (e) => {
    if (e.key === 'Enter') {
      if (this.state.kakao_id === '') {
        window.alert('공백은 입력 할 수 없습니다.')
      } else {
        console.log('no')
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      kakao_id: e.target.value,
    })
    console.log(e.target.name, e.target.value)
  }

  render() {
    return (
      <>
        <b className="content__title">카카오톡 ID를 입력하세요.</b>
        <div className="content__form">
          <TextField 
            name="kakao_id"
            label="카카오톡 ID를 입력"
            value={this.state.kakao_id}
            onChange={this.handleChange}
            margin="normal"
            onKeyPress={this.enterEvent}
          />            
        </div>
      </>
    )
  }
}    

export default KaKaoID;