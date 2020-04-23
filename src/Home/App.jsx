import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import './App.css';
import Login from '../Users/Login';
import NavBar from './NavBar';
import buffLogo from '../Images/newlogo.png';
import 'semantic-ui-css/semantic.min.css';
import UsersSetting from '../Users/UsersSettings';
import MovieProfile from '../Movie/MovieProfile';
import SearchPage from '../Search/SearchPage';
import AboutUs from '../AboutUs/AboutUsPage';
import background from '../Images/dark-honeycomb.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieVisibility: false,
      searchPageVisibility: false,
      loginVisibility: true,
      userPageVisibility: false,
      aboutUsVisibility: false
     };

     this.toggleMovieProfile = this.toggleMovieProfile.bind(this);
     this.toggleSearchPage = this.toggleSearchPage.bind(this);
     this.toggleLoginPage = this.toggleLoginPage.bind(this);
     this.toggleUsersPage = this.toggleUsersPage.bind(this);
     this.toggleAboutUsPage = this.toggleAboutUsPage.bind(this);
  }

  toggleMovieProfile(){
    this.setState({
      movieVisibility: true,
      searchPageVisibility: false,
      loginVisibility: false,
      aboutUsVisibility: false,
      userPageVisibility: false
    })
  }

  toggleSearchPage(){
    this.setState({
      searchPageVisibility: true,
      movieVisibility: false,
      loginVisibility: false,
      aboutUsVisibility: false,
      userPageVisibility: false
    })
  }

  toggleUsersPage(){
    this.setState({
      userPageVisibility: true,
      searchPageVisibility: false,
      movieVisibility: false,
      aboutUsVisibility: false,
      loginVisibility: false
    })
  }

  toggleLoginPage(){
    this.setState({
      loginVisibility: true,
      searchPageVisibility: false,
      movieVisibility: false,
      aboutUsVisibility: false,
      userPageVisibility: false
    })
  }

  toggleAboutUsPage(){
    this.setState({
      aboutUsVisibility: true,
      loginVisibility: false,
      searchPageVisibility: false,
      movieVisibility: false,
      userPageVisibility: false
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
              <NavBar movieOnclick={this.toggleMovieProfile} searchOnClick={this.toggleSearchPage} loginOnClick={this.toggleLoginPage} usersOnClick={this.toggleUsersPage} aboutUsOnClick={this.toggleAboutUsPage}/>
            </Grid.Column>
            <Grid.Column width={10}>
            {this.state.movieVisibility && <MovieProfile />}
            {this.state.loginVisibility && <Login />}
            {this.state.aboutUsVisibility && <AboutUs />}
            {this.state.userPageVisibility && <UsersSetting />}
            {this.state.searchPageVisibility && <SearchPage />}
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>

    )
  }
}


export default App;
