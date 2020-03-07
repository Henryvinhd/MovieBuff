import React, { Component } from 'react';
import {Button, Segment} from 'semantic-ui-react';
import './App.css';

class Login extends Component {
  render() {
    return (
      <Segment className="login">
        <div class="ui focus input"><input type="text" placeholder="Username" /></div>
        <div class="ui focus input"><input type="text" placeholder="Password" /></div>
        <Button>Login</Button>
      </Segment>
    )
  }
}

export default Login;