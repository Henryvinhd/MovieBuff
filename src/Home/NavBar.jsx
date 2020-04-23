import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  }

 
  render() {

      return (
        <div className='navBar'>
        <Menu inverted pointing vertical >
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='home'
            onClick={this.props.loginOnClick}
          />
          <Menu.Item
            name='account'
            onClick={this.props.usersOnClick}
          />
          <Menu.Item
            name='movies'
            onClick={this.props.movieOnclick}
          />
          <Menu.Item
            name='search'
            onClick={this.props.searchOnClick}
          />
          <Menu.Item
            name='about us'
            onClick={this.props.aboutUsOnClick}
          />
        </Menu>
        </div>
    )
  }
}
export default NavBar;