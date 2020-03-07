import React, {Component} from 'react';
import {Header, Button, Image, Grid} from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './buff_logo.png';
import 'semantic-ui-css/semantic.min.css';
import UsersSetting from './UsersSettings';



class App extends Component {
  render(){
  return (
    <div>
     <div className='topHeader'> <Image src={buffLogo} size='small' className='center'/>  </div>
      
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} >
            <NavBar /> 
          </Grid.Column>
          <Grid.Column width={10}>
            <UsersSetting />
          </Grid.Column>
        </Grid.Row> 
      </Grid> 
      

    </div>
    
  )
  }
}


export default App;
