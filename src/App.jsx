import React, { Component } from 'react';
import { Header, Button, Image, Grid } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './newlogo.png';
import 'semantic-ui-css/semantic.min.css';
import MovieProfile from './MovieProfile';
import SearchPage from './SearchPage';



class App extends Component {


  render() {
   
    return (
      <div className='body'>
        <Grid>
          <Grid.Row fluid>
            <Image src={buffLogo} className='center' /> 
         </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} >
              <NavBar />
            </Grid.Column>
            <Grid.Column width={10}>

              <MovieProfile />

            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>

    )
  }
}


export default App;
