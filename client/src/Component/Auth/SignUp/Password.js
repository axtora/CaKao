import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class PassWord extends Component {
  render() {
    return (
      <>
        <b className="content__title">CaKao에서 사용할 패스워드를 입력하세요.</b>
        <div className="content__form">
          <TextField 
            name="password"
            label="패스워드를 입력"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            type="password"
          />            
        </div>
      </>
    )
  }
}    

export default PassWord;