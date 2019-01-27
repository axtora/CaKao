import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Component/Main/Main';
import SignUp from './Component/Auth/SignUp/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/auth/signup" component={SignUp} />          
        </Switch>
      </Router>
    );
  }
}

export default App;
