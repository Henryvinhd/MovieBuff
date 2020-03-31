import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import NavBar from './NavBar';
import buffLogo from './Images/newlogo.png';
import 'semantic-ui-css/semantic.min.css';
import UsersSetting from './UsersSettings';
import MovieProfile from './MovieProfile';
import SearchPage from './SearchPage';
import background from './Images/dark-honeycomb.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieVisibility: false,
      searchPageVisibility: false,
      loginVisibility: false
     };

     this.toggleMovieProfile = this.toggleMovieProfile.bind(this);
     this.toggleSearchPage = this.toggleSearchPage.bind(this);
     this.toggleLoginPage = this.toggleLoginPage.bind(this);
  }

  toggleMovieProfile(){
    this.setState({
      movieVisibility: !this.state.movieVisibility,
      searchPageVisibility: false,
      loginVisibility: false
    })
  }

  toggleSearchPage(){
    this.setState({
      searchPageVisibility: !this.state.searchPageVisibility,
      movieVisibility: false,
      loginVisibility: false
    })
  }

  toggleLoginPage(){
    this.setState({
      loginVisibility: !this.state.loginVisibility,
      searchPageVisibility: false,
      movieVisibility: false
    })
  }

  render() {
   
    return (
      <div  style = {{ backgroundImage: `url(${background})`}}>
        <Grid>
          <Grid.Row fluid>
            <Image src={buffLogo} className='center' /> 
         </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} >
              <NavBar movieOnclick={this.toggleMovieProfile} searchOnClick={this.toggleSearchPage} loginOnClick={this.toggleLoginPage}/>
            </Grid.Column>
            <Grid.Column width={10}>
            {this.state.movieVisibility && <MovieProfile />}
            {this.state.loginVisibility && <UsersSetting />}
            {this.state.searchPageVisibility && <SearchPage />}
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>

    )
  }
}


export default App;
