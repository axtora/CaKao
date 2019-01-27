import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Tag extends Component {
  render() {
    return (
      <>
        <b className="content__title">알림을 받고 싶은 <span>#문장</span>이나 <span>#단어</span>를 입력하세요.</b>
        <div className="content__form">
          <TextField 
          name="tag"
          label="문장또는 단어 입력"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          /> 
        </div>
      </>
    )
  }
}    

export default Tag;