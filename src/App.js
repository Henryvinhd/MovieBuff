import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header as='h1'>MovieBuff</Header>
        
        <div class="ui focus input"><input type="text" placeholder="Username" /></div>
        <div class="ui focus input"><input type="text" placeholder="Password" /></div>
        <Button>Login</Button>
      
    </div>
  );
}

export default App;
