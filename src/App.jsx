import React, {Component} from 'react';
import {Header, Button, Image, Grid} from 'semantic-ui-react';
import './App.css';
import HomePage from './Homepage';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './buff_logo.png';
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  render(){
  return (
    <div>
     <Header as='h1' className='topHeader'> <Image src={buffLogo} size='Large' />  </Header>
    <Grid>
      
      <Grid.Row>
        <Grid.Column width={6}>
          <NavBar />
        </Grid.Column>
        <Grid.Column width={10}>
          <HomePage />
          <div class="ui focus input"><input type="text" placeholder="Username" /></div>
          <div class="ui focus input"><input type="text" placeholder="Password" /></div>
          <Button>Login</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Footer />
      </Grid.Row>
    </Grid>
    </div>
    
  )
  }
}


export default App;
