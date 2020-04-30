import _ from 'lodash'
import React, { Component } from 'react';
import {Image, Grid, GridColumn, Segment, Button, Card, Icon, Header, Form, Input, Label, Tab, Message, Checkbox, FormField, Popup, Select, TextArea, Progress} from 'semantic-ui-react'
import src from '../assets/pic.jpg'
import { useAuth0 } from "../react-auth0-spa";

import ReactDOM from "react-dom";
import addYears from "date-fns/addYears";
import format from "date-fns/format";
//import "./styles.css";
import axios from 'axios';;
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

mock.onPost("/file/upload/enpoint").reply(200);

let d = addYears(new Date("2015-01-01T00:00"), 1);
let f = format(d, "yy-mm-dd");

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
                  favoriteGenre: "",
                  file: null,
                  fileName: "",
                  isUploading: false,
                  statusCode: ""

                }
  }

  onFormSubmit = e => {
    e.preventDefault(); // Stop form submit
    console.log("form submit");
    this.fileUpload(this.state.file);
  };

  fileChange = e => {
    this.setState(
      { file: e.target.files[0], fileName: e.target.files[0].name },
      () => {
        console.log(
          "File chosen --->",
          this.state.file,
          console.log("File name  --->", this.state.fileName)
        );
      }
    );
  };

  fileUpload = async file => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      axios.post("/file/upload/enpoint").then(response => {
        console.log(response);
        console.log(response.status);
        this.setState({ statusCode: response.status }, () => {
          console.log(
            "This is the response status code --->",
            this.state.statusCode
          );
        });
      });
    } catch (error) {
      console.error(Error(`Error uploading file ${error.message}`));
    }
  };

  componentDidMount(){
      this.setState({
        given_name: this.props.user.given_name,
        family_name: this.props.user.given_name,
        nickname: this.props.user.nickname,
        email: this.props.user.email,
        picture: this.props.user.picture
      });
  }

  
 
  
  handleColorChange = (e) => this.setState({ color: e.target.value })

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
    const { statusCode } = this.state;

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
                      {this.state.given_name} is a software developer living in Corona Virus, Quarintine.
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
                <Form>
                  <Form.Group widths='equal'>
                  <Form.Field
                    control={Input}
                    label='First Name'
                    placeholder='ex. John'
                  />
                  
                  <Form.Field
                    control={Input}
                    label='Last Name'
                    placeholder='ex. Smith'
                  />
                  
                  <Form.Field
                    control={Input}
                    label='Email'
                    placeholder='ex. abc@gmail.com'
                  />
                  </Form.Group>

                  <Form.Group widths='equal'>
                  <Form.Field
                    control={Input}
                    label='Nickname'
                    placeholder='ex. jsmith123'
                  />

                  <Form.Field
                    control={Input}
                    label='Birthday'
                    placeholder='ex. 01/31/2020'
                  />
                
                  <Form.Field
                    control={Input}
                    label='Phone Number'
                    placeholder='ex. 401-123-4567'
                  />
                  </Form.Group>

                  <Form.Field
                    control={Select}
                    label='Gender'
                    fluid
                    options={options}
                    placeholder='Gender'
                  />
                  
                  <Form onSubmit={this.onFormSubmit}>
              <Form.Field>
                <label>File input & upload </label>
                <Button as="label" htmlFor="file" type="button" animated="fade">
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input
                  type="file"
                  id="file"
                  hidden
                  onChange={this.fileChange}
                />
                <Form.Input
                  fluid
                  label="File Chosen: "
                  placeholder="Use the above bar to browse your file system"
                  readOnly
                  value={this.state.fileName}
                />
                <Button style={{ marginTop: "20px" }} type="submit">
                  Upload
                </Button>
                {statusCode && statusCode === 200 ? (
                  <Progress
                    style={{ marginTop: "20px" }}
                    percent={100}
                    success
                    progress
                  >
                    File Upload Success
                  </Progress>
                ) : statusCode && statusCode === 500 ? (
                  <Progress
                    style={{ marginTop: "20px" }}
                    percent={100}
                    error
                    active
                    progress
                  >
                    File Upload Failed
                  </Progress>
                ) : null}
              </Form.Field>
            </Form>





                   <Message>
                    <Message.Header>Bio Description</Message.Header>
                    <Message.List>
                      <Message.Item> Tell everyone a little about yourself!</Message.Item>
                      <Message.Item> What are your hobbies?</Message.Item>
                      <Message.Item> Don't forget to fill in your favorite cinematic genres!</Message.Item>
                    </Message.List>
                  </Message>
                  <Form.Field
                    control={TextArea}
                    label='Bio'
                    placeholder='ex. I am a software developer living in Corona Virus, Quarintine.'
                  />
                   <Form.Field
                    control={TextArea}
                    label='Favorite Genres'
                    placeholder='ex. Horror, Action & Adventure, and Comedy'
                  />
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

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

const UserSettings = () => {
  const { user } = useAuth0();

    return (

      <TabExampleColoredInverted  user={user}/>
    
    );
  };
  


export default UserSettings