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

  onClickEvent = () => {
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

  render() {
    const { link, index } = this.state;
    const { id, pwd } = this.props

    const linkComponent = (
      <div className="content__form">
        <TextField 
        name="link"
        label="알람받고싶은 링크를 입력"
        value={this.state.link}
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
          index === 4 ? <Auth index={index} id={id} pwd={pwd} link={link} /> : linkComponent
        }
      </>
    )
  }
}    

export default Link;