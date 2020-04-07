import React, { Component } from 'react';
import '../Home/App.css';
import './UserSettings.css';
import {Image, Grid, GridColumn, Segment, Button, Card, Icon, Header, Menu, Form, Input, Label} from 'semantic-ui-react'
import src from '../Images/pic.jpg'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export class UsersSetting extends Component { state = {activeItem: 'acc'}
  handleItemClick = (e, {name}) =>this.setState({ activeItem: name})
  

  render() 
  {
    const { activeItem } = this.state
    
    return (
      <Grid>
        <GridColumn width={4}>
          <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
                <Card.Header>John Smith</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2020</span>
                </Card.Meta>
                <Card.Description>
                  John is a software developer living in Quarintine.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          
          <Segment>
          <Menu secondary vertical>
            <Menu.Item
              name='Account Settings'
              active={activeItem === 'acc'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Change Password'
              active={activeItem === 'pass'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Friends'
              active={activeItem === 'friend'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Favorites'
              active={activeItem === 'fav'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              name='Privacy'
              active={activeItem === 'pri'}
              onClick={this.handleItemClick}
            />
          </Menu>

          </Segment>
          

        </GridColumn>
        
        <GridColumn width={12}>
          <Header as='h2'color='grey'>
            <Icon name='settings' />
            <Header.Content>
              Account Settings
              <Header as='h3' color='grey'>Manage your preferences</Header>
            </Header.Content>
          </Header>
          <Form>
            <Form.Field>
              <Label>First Name:</Label>
              <Input placeholder='ex. John' />
            </Form.Field>
            <Form.Field>
              <Label>Last Name:</Label>
              <Input placeholder='ex. Smith' />
            </Form.Field>
            <Form.Field>
              <Label>Email:</Label>
              <Input placeholder='ex. abc@gmail.com' />
            </Form.Field>
            <Form.Field>
              <Label>User ID:</Label>
              <Input placeholder='ex. jsmith123' />
            </Form.Field>
            <Form.Field>
              <Label>Birthday:</Label>
              <Input placeholder='ex. 01/31/2020' />
            </Form.Field>
            <Form.Field>
              <Label>Phone Number:</Label>
              <Input placeholder='ex. 401-123-4567' />
            </Form.Field>
            <Form.Field>
              <Label>Gender:</Label>
              <Form.Select
                fluid
                options={options}
                placeholder='Gender'
              />
            </Form.Field>
            <Form.Field>
            <div>
              <Button positive>Submit Changes</Button>
            </div>
            </Form.Field>
          </Form>
        </GridColumn>
    
      </Grid>
      
    )
  }
}
export default UsersSetting;