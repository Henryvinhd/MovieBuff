import React, {Component} from 'react';
import {Header, Button, Image, Grid} from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './buff_logo.png';
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  render(){
  return (
    <div>
     <div className='topHeader'> <Image src={buffLogo} size='small' className='center'/>  </div>
      
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} >
            <NavBar /> 
          </Grid.Column>
          <Grid.Column width={10}>
            <Login />
          </Grid.Column>
        </Grid.Row> 
      </Grid> 
      

    </div>
    
  )
  }
}


export default App;
