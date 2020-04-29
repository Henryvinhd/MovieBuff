import React, { Component } from 'react';
import {Container, Row, Col, Table, Button} from 'reactstrap';
import {Segment, Checkbox, Label, Card} from 'semantic-ui-react';
import movieJSON from './Movies50.json';



const movieItems = (movie) => {
    return (
        <Col key = {movie.id}>
            <Card>
                <Card.Title>{movie.title} </Card.Title>
                <Card.Text> {movie.release_year}</Card.Text>
                <a href = {movie.poster_400x570}>
                    <img src={movie.poster_400x570} alt="NO ARTWORK PROVIDED"/>
                </a>
            </Card>
        </Col>
    );
}



class MainDashBoard extends Component {
    state = { 
        currentKey : "39145758a7c7ad3266d0a97c13643cecaeb109e1",
        type: "movies",
        onLoadOffSet : 0,
        onLoadLimit: 50,
        data:  [],
     }

     async componentDidMount() {
        const initRes = await fetch (movieJSON);
        const initData = await initRes.json();
        this.setState({ 
            data: initData.results,
        }, () => {
            console.log(this.state.data);
        });
    }

    render() {
        return ( 
            
            <React.Fragment>
                <Container className = "themed-container" fluid = {true} >
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            <Segment compact>
                                                <Button primary color = 'info'> Search </Button>
                                            </Segment>
                                        </th>
                                        <th>
                                            <Segment compact>
                                                <Checkbox toggle label = "Hulu ">  </Checkbox>
                                            </Segment>
                                        </th>
                                        <th>
                                            <Segment compact>
                                                <Checkbox toggle label = "HBO" />
                                            </Segment>
                                        </th>
                                        <th>
                                            <Segment compact>
                                                <Checkbox toggle label = "Netflix"/>
                                                
                                            </Segment>
                                        </th>
                                        <th>
                                            <Segment compact>
                                                <Checkbox toggle label = "Crunchy Roll"> Crunchy Roll </Checkbox>
                                            </Segment>
                                        </th>
                                    </tr>
                                </thead>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                       {
                           this.state.data.map( (value) => {
                                {movieItems(value)}
                           })
                       }
                    </Row>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default MainDashBoard;