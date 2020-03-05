import React, {Component} from 'react';
import {Header, Button, Image, Grid} from 'semantic-ui-react';
import './App.css';
import HomePage from './Homepage';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './buff_logo.png';



class App extends Component {
  render(){
  return (
    
    <Grid >
      <Grid.Row>
      <Header as='h1' className='topHeader'> <Image src={buffLogo} size='small' />  </Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <NavBar />
        </Grid.Column>
        <Grid.Column width={10}>
          <HomePage />
          <div class="ui focus input"><input type="text" placeholder="Username" /></div>
          <div class="ui focus input"><input type="text" placeholder="Password" /></div>
          <Button>Login</Button>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Footer />
      </Grid.Row>
    </Grid>
    
  )
  }
}


export default App;
