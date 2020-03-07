import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class NavBar extends Component {


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = { activeItem: 'home' }
  render() {
    const { activeItem } = this.state

      return (
        <div className='navBar'>
        <Menu inverted pointing vertical >
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='movies'
            active={activeItem === 'movies'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='tv show'
            active={activeItem === 'tvshow'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contacts'
            active={activeItem === 'contacts'}
            onClick={this.handleItemClick}
          />
        </Menu>
        </div>
    )
  }
}
export default NavBar;