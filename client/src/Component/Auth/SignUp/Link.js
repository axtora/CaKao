import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Auth from '../Auth';

class Link extends Component {
  state = {
    link: '',
    index: this.props.index,
  }

  enterEvent = (e) => {
    if (e.key === 'Enter') {
      if (this.state.link === '') {
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
      link: e.target.value,
    })
  }

  render() {
    const { index } = this.state;

    const linkComponent = (
      <div className="content__form">
        <TextField 
        name="link"
        label="Link"
        value={this.state.link}
        onChange={this.handleChange}
        onKeyPress={this.enterEvent}
        margin="normal"
        />   
      </div>  
    )

    return (
      <>
        {
          index === 4 ? <Auth index={index} /> : linkComponent
        }
      </>
    )
  }
}    

export default Link;