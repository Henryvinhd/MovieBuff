import _ from 'lodash'
import React, { Component } from 'react';
import {Image, Grid, GridColumn, Segment, Button, Card, Icon, Header, Form, Input, Label, Tab, Message, Checkbox, Popup, Select} from 'semantic-ui-react'
import src from '../assets/pic.jpg'
import { useAuth0 } from "../react-auth0-spa";


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
]

const timeoutLength = 2500

class TabExampleColoredInverted extends Component {
  constructor (props){
    super(props);
    this.state = {color: colors[0],
                  given_name: "",
                  family_name: "",
                  nickname: "",
                  email: "",
                  picture: "",
                  bio: "",
                  birthday: "",
                  gender: "",
                  favoriteGenre: ""
                }
  }

  componentDidMount(){
      this.setState({
        given_name: this.props.user.given_name,
        family_name: this.props.user.given_name,
        nickname: this.props.user.nickname,
        email: this.props.user.email,
        picture: this.props.user.picture
      });
  }

  handleGivenNameChange = (e) => this.setState({ given_name: e.target.value })

  handleLastNameChange = (e) => this.setState({ family_name: e.target.value })

  handleEmailChange = (e) => this.setState({ email: e.target.value })
  
  handleNicknameChange = (e) => this.setState({ nickname: e.target.value })

  handlePictureChange = (e) => this.setState({ picture: e.target.value })

  handleBioChange = (e) => this.setState({ bio: e.target.value })

  handleBirthdayChange = (e) => this.setState({ birthday: e.target.value })
  
  handleGenderChange = (e) => this.setState({ gender: e.target.value })

  handleGenreChange = (e) => this.setState({ favoriteGenre: e.target.value })

  handleGolorChange = (e) => this.setState({ color: e.target.value })

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render() {
    const { color } = this.state

    const panes = [

      { menuItem: 'Profile', render: () => 
    <Tab.Pane>
    <Grid>
      
    <Grid.Column>
    <Header as='h2'color='grey'>
                  <Icon name='user circle' />
                  <Header.Content>
                    Profile
                    <Header as='h3' color='grey'>View your profile appearance</Header>
                  </Header.Content>
                </Header>
                
                  
                  <Card fluid color='blue'>
                  <img
                      src={this.state.picture}
                      alt="Profile"
                      className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                  <Card.Content>
                    <Card.Header>
                      {this.state.nickname}
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2020</span>
                    </Card.Meta>
                    <Card.Description>
                      {this.state.given_name}
                    </Card.Description>
                    <Card.Description>
                      {this.state.bio}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      {this.state.email}
                    </a>
                  </Card.Content>
                </Card>
                </Grid.Column>
              
            </Grid>
    
    </Tab.Pane> },
    
    
    
      { menuItem: 'Account Settings', render: () => 
      
      <Tab.Pane>
        
     
        <GridColumn stretched width={4}>
                <Segment>
                <Header as='h2'color='grey'>
                  <Icon name='settings' />
                  <Header.Content>
                    Account Settings
                    <Header as='h3' color='grey'>Manage your profile information</Header>
                  </Header.Content>
                </Header>
                <Form success>
                  <Form.Group widths='equal'>
                  <Form.Field
                    control={Input}
                    label='First Name'
                    placeholder='ex. John'
                    onChange={this.handleGivenNameChange}
                  />
                  
                  <Form.Field
                    control={Input}
                    label='Last Name'
                    placeholder='ex. Smith'
                    onChange={this.handleLastNameChange}
                  />
                  
                  <Form.Field
                    control={Input}
                    label='Email'
                    placeholder='ex. abc@gmail.com'
                    onChange={this.handleEmailChange}
                  />
                  </Form.Group>

                  <Form.Group widths='equal'>
                  <Form.Field
                    control={Input}
                    label='Nickname'
                    placeholder='ex. jsmith123'
                    onChange={this.handleNicknameChange}
                  />

                  <Form.Field
                    control={Input}
                    label='Birthday'
                    placeholder='ex. 01/31/2020'
                    onChange={this.handleBirthdayChange}
                  />
                
                  <Form.Field
                    control={Input}
                    label='Phone Number'
                    placeholder='ex. 401-123-4567'
                    onChange={this.handleChange}
                  />
                  </Form.Group>

                  <Form.Field
                    control={Select}
                    label='Gender'
                    fluid
                    options={options}
                    placeholder='Gender'
                    onChange={this.handleGenderChange}
                  />
                   <Message>
                    <Message.Header>Bio Description</Message.Header>
                    <Message.List>
                      <Message.Item> Tell everyone a little about yourself!</Message.Item>
                      <Message.Item> What are your hobbies?</Message.Item>
                      <Message.Item> Don't forget to fill in your favorite cinematic genres!</Message.Item>
                    </Message.List>
                  </Message>
                  <Form.Field
                    control={Input}
                    label='Bio'
                    placeholder='ex. I am a software developer living in Corona Virus, Quarintine.'
                    onChange={this.handleBioChange}
                  />
                   <Form.Field
                    control={Input}
                    label='Favorite Genres'
                    placeholder='ex. Horror, Action & Adventure, and Comedy'
                    onChange={this.handleGenreChange}
                  />
                
                <Popup
                      trigger={<Form.Button>Submit</Form.Button>}
                      content={`The changes have been made!`}
                      on='click'
                      open={this.state.isOpen}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                    />
                </Form>
                </Segment>
                </GridColumn>
                
      </Tab.Pane> },
    
    
      { menuItem: 'Change Password', render: () => 
      
      <Tab.Pane>
      
        <GridColumn stretched width={12}>
                <Segment>
                  <Header as='h2'color='grey'>
                    <Icon name='edit' />
                    <Header.Content>
                      Change Password
                      <Header as='h3' color='grey'>Edit your password preferences</Header>
                    </Header.Content>
                  </Header>
                  <Form>
                  <Form.Field>
                    <Label>Current Password:</Label>
                    <Input placeholder='ex. password' />
                  </Form.Field>
                  <Message>
                    <Message.Header>Enter your current password to make changes!</Message.Header>
                  </Message>
                  <Form.Field>
                    <Label>New Password:</Label>
                    <Input placeholder='ex. newPassword' />
                  </Form.Field>
                  <Form.Field>
                    <Label>Confirm New Password:</Label>
                    <Input placeholder='ex. newPassword' />
                  </Form.Field>
                  <Message>
                    <Message.Header>New Password Tips</Message.Header>
                    <Message.List>
                      <Message.Item> include a mix of uppercase and lower case letters</Message.Item>
                      <Message.Item> include numbers</Message.Item>
                      <Message.Item> include symbols</Message.Item>
                    </Message.List>
                  </Message>
                  <Form.Field>
                  <div>
                    <Popup
                      trigger={<Button positive content='Submit Changes' />}
                      content={`The changes have been made!`}
                      on='click'
                      open={this.state.isOpen}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      position='top right'
                    />
                  </div>
                  </Form.Field>
                 
                  </Form>
                </Segment>
        </GridColumn>
      </Tab.Pane> },
    
    
      { menuItem: 'Friends', render: () => 
      <Tab.Pane>
        <GridColumn>
        <Header as='h2'color='grey'>
                  <Icon name='users' />
                  <Header.Content>
                    Friends
                    <Header as='h3' color='grey'>View your friend list</Header>
                  </Header.Content>
                </Header>
            <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Matthew Harris</Card.Header>
                    <Card.Meta>Co-Worker</Card.Meta>
                    <Card.Description>
                      Matthew is a pianist living in Nashville.
                    </Card.Description>
                  </Card.Content>
                </Card>
    
                <Card>
                  <Card.Content>
                    <Card.Header content='Jake Smith' />
                    <Card.Meta content='Musicians' />
                    <Card.Description content='Jake is a drummer living in New York.' />
                  </Card.Content>
                </Card>
    
                <Card>
                  <Card.Content
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a music producer living in Chicago.'
                  />
                </Card>
    
                <Card
                  header='Jenny Hess'
                  meta='Friend'
                  description='Jenny is a student studying Media Management at the New School'
                />
                 
          </Card.Group>
      </GridColumn>
      </Tab.Pane> },
    
    
      { menuItem: 'Favorites', render: () => 
      <Tab.Pane>
        <GridColumn>
        <Header as='h2'color='grey'>
                  <Icon name='heart' />
                  <Header.Content>
                    Favorites
                    <Header as='h3' color='grey'>View your favorite titles!</Header>
                  </Header.Content>
                </Header>
         <div>
        <Image.Group size='small'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <Image.Group size='small'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <Image.Group size='small'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <Image.Group size='small'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <Image.Group size='small'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
      </div>
    
      </GridColumn>
      </Tab.Pane> },
    
    
      { menuItem: 'Privacy', render: () => 
      <Tab.Pane>
    
    <GridColumn stretched width={12}>
                <Segment>
                  <Header as='h2'color='grey'>
                    <Icon name= 'lock' />
                    <Header.Content>
                      Privacy
                      <Header as='h3' color='grey'>Manage your privacy preferences</Header>
                    </Header.Content>
                  </Header>
                  <Form>
                    <Form.Field>
                    <Checkbox label='Make my profile visible' />
                    </Form.Field>
                    <Form.Field>
                  <Checkbox label='Keep all my favorited videos private' />
                  </Form.Field>
                  <Form.Field>
                  <Checkbox label='Keep all of my subscriptions private' />
                  </Form.Field>
                  <Form.Field>
                  <div>
                    <Popup
                      trigger={<Button positive content='Submit Changes' />}
                      content={`The changes have been made!`}
                      on='click'
                      open={this.state.isOpen}
                      onClose={this.handleClose}
                      onOpen={this.handleOpen}
                      position='top right'
                    />
                  </div>
                  </Form.Field>
                  </Form>
                </Segment>
        </GridColumn>
    
      </Tab.Pane> },
    
    
    
    ]

    return (
        <Tab  
          menu = {{ color, inverted: true, attached: 'top', tabular: true, vertical: false, fluid: false}}
          panes = {panes}
        />
    )
  }
}



const UserSettings = () => {
  const { user } = useAuth0();


    return(
         <TabExampleColoredInverted  user={user} />
      );

}

  


export default UserSettings;
