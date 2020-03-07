import React, { Component } from 'react';
import './App.css';
import './MovieProfile.css';
import { Card, Icon, Image, Header, Table, Rating, Button, Form, Message } from 'semantic-ui-react'


import Cloud from './Images/Cloud.jpg';

class MovieProfile extends Component {
  render() {
    return (
      /* Here is the reviews Section*/
      <div className='topPadding'>
        <Card>
          <Image src={Cloud} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Final Fantasy VII: Advent Children</Card.Header>
            <Card.Meta>Created in 2011</Card.Meta>
            <Card.Description>
              Action, Animated, Fantasy
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends have watched this.
            </a>
          </Card.Content>
        </Card>
        <div className='middlePadding'>


          {/* Here is the reviews Section*/}
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Profile</Table.HeaderCell>
                <Table.HeaderCell>Reviews</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' textAlign='center'>
                    Rocknutz
          </Header>
                </Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={4} maxRating={5} />
                </Table.Cell>
                <Table.Cell>
                  Awesome fucking movie, 10/10 would recommend.
        </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' textAlign='center'>
                    Apple Boy
          </Header>
                </Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={5} maxRating={5} />
                </Table.Cell>
                <Table.Cell>
                  I cant imagine this movie ever being bad it would just be so mean to put that this is a bad movie.
        </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Header fullWidth >
              <Table.Row>
              <Table.HeaderCell colSpan='3' >
              
            <Form className='attached fluid segment'>
              <Form.Group widths='equal'>
              </Form.Group>
              <Form.Input label='Review:' type='Review' />
              <Button color='blue'>Submit</Button>
            </Form>
            </Table.HeaderCell>
            </Table.Row>
            
            </Table.Header>
          </Table>

        </div>
      </div>
    )
  }
}
export default MovieProfile;