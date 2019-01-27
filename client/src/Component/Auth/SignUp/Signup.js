import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Signup.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '400px'
  },
  button: {
    margin: theme.spacing.unit,
    width: '400px',
    height: '50px'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Signup extends Component {
  state = {
    name: "",
    open: true,
  };

  __handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  __ModalClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="signin">
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-name"
              label="유저 이메일"
              className={classes.textField}
              value={this.state.name}
              onChange={this.__handleChange("name")}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="유저 패스워드"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="패스워드 체크"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button variant="outlined" className={classes.button}>
            회원가입
          </Button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);