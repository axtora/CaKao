import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  MenuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <AppBar position='static' style={{backgroundColor: '#2c3e50'}}>
        <ToolBar>
          <Typography veriant="h1" color="inherit" className={classes.grow}>
            CaKao
          </Typography>
          <Button color="inherit">User</Button>
        </ToolBar>
      </AppBar>
    </header>
  )
}

Header.prototypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);