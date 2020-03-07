import React, { Component } from 'react';
import { Header, Button, Image, Grid } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './newlogo.png';
import 'semantic-ui-css/semantic.min.css';
import MovieProfile from './MovieProfile';
<<<<<<< HEAD
import SearchPage from './SearchPage';
=======
>>>>>>> 0329e23cf311defc89827d05527a4a8e58e0ea78



class App extends Component {
<<<<<<< HEAD


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

              <SearchPage />

            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>

    )
=======
  render(){
  return (
    <div>
     <div className='topHeader'> <Image src={buffLogo} size='small' className='center'/>  </div>
      
      <Grid>
        <Grid.Row>
          <Grid.Column width= {3} >
            <NavBar /> 
          </Grid.Column>
          <Grid.Column width={10}>
            <MovieProfile />
          </Grid.Column>
        </Grid.Row> 
      </Grid> 
      

    </div>
    
  )
>>>>>>> 0329e23cf311defc89827d05527a4a8e58e0ea78
  }
}


export default App;
