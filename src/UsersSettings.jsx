import React, { Component } from 'react';
import './App.css';
import './UserSettings.css';
import {Image, Divider} from 'semantic-ui-react'
import src from './pic.jpg'

class UsersSetting extends Component {
render() {
  return (
    
    <Image src={src} size='tiny' verticalAlign='top' />
    
  )
}
}
export default UsersSetting;