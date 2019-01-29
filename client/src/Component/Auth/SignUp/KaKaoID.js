import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Auth from '../Auth';

class KaKaoID extends Component {
  state = {
    kakao_id: '',
    index: this.props.index,
  }

  enterEvent = (e) => {
    if (e.key === 'Enter') {
      if (this.state.kakao_id === '') {
        window.alert('공백은 입력 할 수 없습니다.')
      } else {
        this.setState(
          ({ index }) => ({
            index: index + 1
          })
        )
      }
    }
  }
  

  handleChange = (e) => {
    this.setState({
      kakao_id: e.target.value,
    })
  }

  onClickEvent = () => {
    if (this.state.kakao_id === '') {
      window.alert('공백은 입력 할 수 없습니다.')
    } else {
      this.setState(
        ({ index }) => ({
          index: index + 1
        })
      )
    }
  }

  render() {
    const { kakao_id, index } = this.state;

    const kakaoComponent = (
        <div className="content__form">
        <TextField 
          name="kakao_id"
          label="카카오톡 ID를 입력"
          value={this.state.kakao_id}
          onChange={this.handleChange}
          onKeyPress={this.enterEvent}
          margin="normal"
        />   
        <div className="text-center mt-0-3 next" onClick={this.onClickEvent}>
          <span>다음</span>
        </div>
      </div>
    )

    return (
      <>
        {
          index === 2 ? <Auth index={index} id={kakao_id} /> : kakaoComponent
        }
      </>
    )
  }
}    

export default KaKaoID;