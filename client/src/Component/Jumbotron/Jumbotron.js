import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import logo from '../../logo/Cakao-logo-blue.png';
import GetStart from '../Auth/GetStart/GetStart';
import'./jumbotron.css';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#2196f3',
  },
  input: {
    display: "none"
  }
});

class Jumbotron extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="__middle">
          <div className="jumbotron">
              <div className="jumbotron__logo">
                <img src={logo} alt="cakao__logo" />
              </div>
              <div className="df__center">
                <Button variant="contained" className={classes.button} color="primary" onClick={this.handleOpen}>
                  Get Start
                </Button>
              </div>
          </div>
        </div>
        <GetStart />      
      </>
    )
  }
}
      
Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbotron);