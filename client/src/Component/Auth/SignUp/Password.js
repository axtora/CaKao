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

  
  onClickEvent = () => {
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

  render() {
    const { password, index } = this.state;
    const { id, label } = this.props;

    const passwordComponent = (
      <div className="content__form">
        <TextField 
          name="password"
          label={label}
          value={password}
          onChange={this.handleChange}
          onKeyPress={this.enterEvent}
          margin="normal"
          type="password"
        />            
        <div className="text-center mt-0-3 next" onClick={this.onClickEvent}>
          <span>다음</span>
        </div>        
      </div>
    )
    return (
      <>
        {
          index === 3 ? <Auth index={index} id={id} pwd={password} /> : passwordComponent
        }
      </>
    )
  }
}    

export default PassWord;