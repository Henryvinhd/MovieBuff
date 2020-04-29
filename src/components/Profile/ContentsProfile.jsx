import React, { Component } from 'react';
import './ContentsProfile.css';
import { Card, Icon, Image, Header, Table, Rating, Button, Form, Segment, Menu, GridColumn, GridRow, Grid } from 'semantic-ui-react'
import Cloud from '../../assets/Cloud.jpg'
import Netflix from '../../assets/Netflix.png'
import Hulu from '../../assets/hulu.png'
import CrunchyRoll from '../../assets/CrunchyRoll.jpg'





class MovieProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeItem: 'Synopsis',
      contentItem: [],
      itemID: props.id,
      itemType: props.type,
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


async componentDidMount () {
    const url = "http://api-public.guidebox.com/v2/"+this.state.itemType+"/"+this.state.itemID+"?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1";
    const initJSON = await fetch (url);
    const initData = await initJSON.json();
    this.setState({
      contentItem: initData
    },
    () => {
      console.log(this.state.contentItem);
    })
}

  render() {

    const { activeItem } = this.state
    return (
      /* Here is the reviews Section*/
      <div className='topPadding'>
        <Grid>
          <GridRow>
            <GridColumn width={5}>
              <Card>
                <Image src={this.state.itemType == "movies" ? this.state.contentItem.poster_400x570 : this.state.contentItem.artwork_448x252} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{this.state.contentItem.title}</Card.Header>
                  <Card.Meta>Created in {this.state.contentItem.release_year}</Card.Meta>
                  <Card.Description>
                    {/* {this.state.contentItem.genres[0].title},
                    {this.state.contentItem.genres[1].title},
                    {this.state.contentItem.genres[2].title},
                    {this.state.contentItem.genres[3].title} */}
            </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a target = "_blank" href = {this.state.contentItem.metacritic}>
                    MetaCritic
            </a>
                </Card.Content>
              </Card>
            </GridColumn>
            <GridColumn width={10}>
              <Menu attached='top' tabular>
                <Menu.Item
                  name='Synopsis'
                  active={activeItem === 'Synopsis'}
                  onClick={this.handleItemClick}
                />
                <Segment attached='Synopsis'>
                <p>{this.state.contentItem.overview}</p>
                </Segment>
                </Menu>

              <Menu>
                <Menu.Item
                  name='Cast'
                  active={activeItem === 'Cast'}
                  onClick={this.handleItemClick}
                />
                <Segment attached='Synopsis'>
                <p>CAST LIST</p>
                </Segment>
              </Menu>

              
            </GridColumn>
          </GridRow>

          <GridRow>
            <GridColumn >
                <Image
                  src={Hulu}
                  as='a'
                  size='small'
                  href='https://www.hulu.com/'
                  target='_blank'
                />
            </GridColumn>
            <GridColumn >
                <Image
                  src={Netflix}
                  as='a'
                  size='small'
                  href='https://www.netflix.com/'
                  target='_blank'
                />
            </GridColumn>
            <GridColumn >
                <Image
                  src={CrunchyRoll}
                  as='a'
                  size='small'
                  href='https://www.crunchyroll.com/'
                  target='_blank'
                />
            </GridColumn>
          </GridRow>
        
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
        </Grid>
      </div>

    )
  }
}
export default MovieProfile;