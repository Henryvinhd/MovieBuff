import React, { Component } from 'react';
import './ContentsProfile.css';
import { Card, Image, Segment, Menu, GridColumn, GridRow, Grid, Pagination } from 'semantic-ui-react'
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
      cast: initData.cast,
      director: initData.directors
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
                <Image src={this.state.itemType == "movies" ? this.state.contentItem.poster_400x570 : this.state.contentItem.artwork_608x342} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{this.state.contentItem.title}</Card.Header>
                  <Card.Meta>Created in {this.state.contentItem.release_year}</Card.Meta>
                  <Card.Description>
                    <table>
                      <tbody>
                        <tr>
                          {this.state.genre.map((g) => (
                            <div key={g.id}>
                              <td> {g.title}</td>
                            </div>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </Card.Description>
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
                <Segment attached='Cast Members'>
                  <p><table>
                    <thead>
                      <th colspan='3'>
                        <h1>Cast Members</h1>
                      </th>
                    </thead>
                    <tbody>
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
                </Segment>
              </Menu>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>

    )
  }
}
export default MovieProfile;