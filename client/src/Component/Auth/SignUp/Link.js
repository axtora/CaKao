import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Link extends Component {
  state = {
    link: '',
  }

  handleChange = (e) => {
    console.log('e', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(e.target.name, e.target.value)
  }

  render() {
    return (
      <>
        <b className="content__title">알림을 받고 싶은 링크를 입력하세요.</b>
        <div className="content__form">
          <TextField 
          name="link"
          label="Link"
          value={this.state.link}
          onChange={this.handleChange}
          margin="normal"
          />   
        </div>        
      </>
    )
  }
}    

export default Link;