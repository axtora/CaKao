import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Auth from '../Auth';

class PassWord extends Component {
  state = {
    password: '',
    index: this.props.index,
  }

  enterEvent = (e) => {
    if (e.key === 'Enter') {
      if (this.state.password === '') {
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
      password: e.target.value,
    })
  }

  render() {
    const { index } = this.state;

    const passwordComponent = (
      <div className="content__form">
        <TextField 
          name="password"
          label="패스워드를 입력"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.enterEvent}
          margin="normal"
          type="password"
        />            
      </div>
    )
    return (
      <>
        {
          index === 3 ? <Auth index={index} /> : passwordComponent
        }
      </>
    )
  }
}    

export default PassWord;