import React, { Component } from 'react';
import './ContentsProfile.css';
import { Card, Icon, Image, Header, Table, Rating, Button, Form, Segment, Menu, GridColumn, GridRow, Grid, Pagination } from 'semantic-ui-react'
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
      genre: [],
      cast: [],
      writer: [],
      tag: [],
      director: [],
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  async componentDidMount() {
    const url = "http://api-public.guidebox.com/v2/" + this.state.itemType + "/" + this.state.itemID + "?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1";
    const initJSON = await fetch(url);
    const initData = await initJSON.json();
    this.setState({
      contentItem: initData,
      genre: initData.genres,
<<<<<<< HEAD
      cast : initData.cast,
      writer: initData.writers,
      tag:  initData.tags,
      director: initData.directors
=======
      cast: initData.cast,
      writer: initData.writers,
      tag: initData.tags,
      director: initData.directors

>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
    },
      () => {
        console.log(this.state.contentItem);
      })
  }

  render() {

    const { activeItem } = this.state
    return (
      /* Here is the reviews Section*/
<<<<<<< HEAD
      <div className='topPadding' style = {{width: 1000}}>
=======
      <div className='topPadding'>

>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
        <Grid>
          <GridRow>
            <GridColumn width={5}>
              <Card>
                <Image src={this.state.itemType == "movies" ? this.state.contentItem.poster_400x570 : this.state.contentItem.artwork_608x342} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{this.state.contentItem.title}</Card.Header>
                  <Card.Meta>Created in {this.state.contentItem.release_year}</Card.Meta>
                  <Card.Description>
                    <table>
<<<<<<< HEAD
                      <thead> <th> Genres</th></thead>
                      <tbody>
                        <tr>
                          {this.state.genre.map( (g) => (
                            <div key={g.id}>
                                <td> {g.title}</td>
=======
                      <tbody>
                        <tr>
                          {this.state.genre.map((g) => (
                            <div key={g.id}>
                              <td> {g.title}</td>
>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
                            </div>
                          ))}
                        </tr>
                      </tbody>
                    </table>
<<<<<<< HEAD
            </Card.Description>
=======
                  </Card.Description>
>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
                </Card.Content>
                <Card.Content extra>
                  <a target="_blank" href={this.state.contentItem.metacritic}>
                    MetaCritic
                 </a>
                </Card.Content>
                <Card.Content>


                  <Image className='rightPadding'
                    src={Hulu}
                    as='a'
                    size='mini'
                    href='https://www.hulu.com/'
                    target='_blank'
                  />

                  <Image className='rightPadding'
                    src={Netflix}
                    as='a'
                    size='mini'
                    href='https://www.netflix.com/'
                    target='_blank'
                  />

                  <Image
                    src={CrunchyRoll}
                    as='a'
                    size='mini'
                    href='https://www.crunchyroll.com/'
                    target='_blank'
                  />
                </Card.Content>
              </Card>
            </GridColumn>




            <GridColumn width={10}>
              <h1 style={{ textAlign: 'center' }}>{this.state.itemType == "movies" ? "Movie Info" : "Show Info"}</h1>
              <Menu attached='top' tabular>
                <Menu.Item
                  name='Synopsis'
                  active={activeItem === 'Synopsis'}
                  onClick={this.handleItemClick} />
                <Segment attached='Synopsis'>
                  <p>{this.state.contentItem.overview}</p>
                </Segment>
              </Menu>

              <Menu>
<<<<<<< HEAD
                <Segment attached='Synopsis'>
                <p>
                  <table>
                    <thead>
                      <th colspan = '3'> 
=======
                <Segment attached='Cast Members'>
                  <p><table>
                    <thead>
                      <th colspan='3'>
>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
                        <h1>Cast Members</h1>
                      </th>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                  {this.state.cast.slice(0,3).map((m) => (
                   <tr>
                     <td>
                       <img src={m.image} width = "100" height = "100"  alt="NO IMAGE AVAILABLE"/>
                     </td>
                      <td> Name: </td><td> {m.name}</td>
                      <td> Character: </td><td> {m.character_name}</td>
                   </tr>
                  ))}
                    </tbody>
                  </table>
                </p>
=======
                      {this.state.cast.slice(0, 5).map((m) => (
                        <React.Fragment>
                          <tr>
                            <td>
                              <img src={m.image} width="50" height="50" alt="NO IMAGE AVAILABLE" />
                            </td>
                            <td> Name: </td><td> {m.name}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td> Character: </td><td> {m.character_name}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table></p>
                  <Pagination defaultActivePage={1} totalPages={5} />
                </Segment>
                <Segment attached='Directors'>
                  <p><table>
                    <thead>
                      <th colspan='3'>
                        <h1>Directors</h1>
                      </th>
                    </thead>
                    <tbody>
                      {this.state.director.slice(0, 3).map((m) => (
                        <tr>
                          <td> Name: </td><td> {m.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table></p>
>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
                </Segment>
              </Menu>
            </GridColumn>
          </GridRow>

<<<<<<< HEAD
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
        
          <div className='middlePadding' style = {{width: 800}}>
            {/* Here is the reviews Section*/}
=======


          {/* <div className='middlePadding'>
            
>>>>>>> b3f4390bb520b0dce01bca9eb6ab7ea851d11a3f
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
          </div> */}
        </Grid>
      </div>

    )
  }
}
export default MovieProfile;