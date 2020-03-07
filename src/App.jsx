import React, { Component } from 'react';
import { Header, Button, Image, Grid } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import Footer from './Footer';
import buffLogo from './Images/newlogo.png';
import 'semantic-ui-css/semantic.min.css';
<<<<<<< HEAD
import UsersSetting from './UsersSettings';
=======
import MovieProfile from './MovieProfile';
import SearchPage from './SearchPage';
import background from './Images/dark-honeycomb.png'
>>>>>>> 5a0ba2c57e06621314d4b65b966b1aeb4fe53be3

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPage: false
     };
  }

  handleItemClick = (e) => this.setState({ searchPage: !SearchPage })

<<<<<<< HEAD
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
=======
  render() {
   
    return (
      <div  style = {{ backgroundImage: `url(${background})`}}>
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
>>>>>>> 5a0ba2c57e06621314d4b65b966b1aeb4fe53be3
  }
}


export default App;
