import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
        <li></li>
    </ul>
    )
  }
}
export default NavBar;