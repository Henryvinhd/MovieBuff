import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">Account</a></li>
        <li><a href="contact.asp">Movies</a></li>
        <li><a href="about.asp">TV Show</a></li>
        <li><a href="about.asp">Contact</a></li>
        <li></li>
    </ul>
    )
  }
}
export default NavBar;