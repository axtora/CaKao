import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Auth from '../Auth';

class Tag extends Component {
  state = {
    tag: '',
    index: this.props.index,
  }

  enterEvent = (e) => {
    if (e.key === 'Enter') {
      if (this.state.tag === '') {
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
      tag: e.target.value,
    })
  }

  render() {
    const { index } = this.state;

    const tagComponent = (
      <div className="content__form">
        <TextField 
        name="tag"
        label="문장또는 단어 입력"
        value={this.state.tag}
        onChange={this.handleChange}
        onKeyPress={this.enterEvent}
        margin="normal"
        /> 
      </div>
    );

    return (
      <>
        {
          index === 5 ? <Auth index={index} /> : tagComponent
        }
      </>
    )
  }
}    

export default Tag;