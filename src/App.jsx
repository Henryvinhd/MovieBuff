import React, {Component} from 'react';
import {Header, Button} from 'semantic-ui-react';
import './App.css';
import HomePage from './Homepage';
import NavBar from './NavBar';
import Footer from './Footer';



class App extends Component {
  render(){
  return (
    <div className="App">
      <HomePage />
      <NavBar />
      <Header as='h1'>MovieBuff</Header>
        
        <div class="ui focus input"><input type="text" placeholder="Username" /></div>
        <div class="ui focus input"><input type="text" placeholder="Password" /></div>
        <Button>Login</Button>
      <Footer />
    </div>
  );
  }
}

export default App;
