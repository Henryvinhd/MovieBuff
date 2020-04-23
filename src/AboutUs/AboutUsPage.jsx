import React, { Component } from 'react';
import '../Home/App.css';
import '../AboutUs/AboutUsPage.css';
import { Card, Icon, Image, Header, Table, Rating, Button, Form, Segment, Menu, GridColumn, List,  GridRow, Grid, Container, ListDescription } from 'semantic-ui-react'

class AboutUs extends Component {
   render(){
    return(<div>
        <Grid>
            
            <GridRow>
                <Container textAlign= 'center'>
                    <Header style={{color:"white"}} as='h1'>About Us!</Header>
                        <div style={{color:"white"}}>
                        <h4 style={{textAlign:'left'}}>
                        Movie Buff is a web-based application built to make browsing and searching for
                        your favorite channels, movies and shows a whole lot easier. This application combines
                        these 5 streaming applications; CrunchyRoll, Hulu, Netflix, HBO and Amazon Prime. We use 
                        the guidebox API which gives us access to data on hundreds of different shows and movies.
                        As long as you have an account you can perform a search and find out which
                        service that you have is currently streaming that show/movie. You will have access
                        to a link that will redirect you to the desired application for your streaming entertainment.  
                        </h4>
                        <h4  style={{textAlign:'left'}}>
                        Every month we intend to add new patches that will add more and more services for you
                        to search through. This will eliminate the need for wasting time on signing into 
                        all this services just to find out you dont have a subscription to the service you need. 
                        Our goal is to make sitting back and binge watching shows even easier and more enjoyable.
                        We have links to our social media as well as the creators contact information if you have any 
                        questions/problems with the app. We love to hear any feedback so please dont be shy!
                        </h4>
                        </div>            
                </Container>
            </GridRow>
            
            <GridRow>
                <div className='center'>
                <List>
                    <List.Item>
                        <List.Icon name='mail' style={{color:"white"}} />
                        <List.Content>
                            <List.Description> 
                                {<a href='mailto:mstangelo@gmail.com'>Michael St. Angelo</a>} 
                            </List.Description>
                        </List.Content>
                    </List.Item>  
                    <List.Item>
                        <List.Icon name='mail' style={{color:"white"}} />
                        <List.Content>
                            <List.Description> 
                                {<a href='mailto:Luke@gmail.com'>Luke</a>} 
                            </List.Description>
                        </List.Content>
                    </List.Item> 
                    <List.Item>
                        <List.Icon name='mail' style={{color:"white"}} />
                        <List.Content>
                            <List.Description> 
                                {<a href='mailto:Brandon@gmail.com'>Brandon</a>} 
                            </List.Description>
                        </List.Content>
                    </List.Item> 
                    <List.Item>
                        <List.Icon name='mail' style={{color:"white"}} />
                        <List.Content>
                            <List.Description> 
                                {<a href='mailto:Evan@gmail.com'>Evan</a>} 
                            </List.Description>
                        </List.Content>
                    </List.Item> 
                    <List.Item>
                        <List.Icon name='mail' style={{color:"white"}} />
                        <List.Content>
                            <List.Description> 
                                {<a href='mailto:Henry@gmail.com'>Henry</a>} 
                            </List.Description>
                        </List.Content>
                    </List.Item> 
                </List>
                </div>
            </GridRow>
            
            <GridRow>
                    <div className= 'center'>
                        <Button className = 'buttonCenter'color='facebook' href='https://www.facebook.com/'>
                            <Icon name='facebook' /> Facebook
                        </Button>
                        <Button color='instagram' href='https://www.instagram.com/'>
                            <Icon name='instagram' /> Instagram
                        </Button>
                    </div>
            </GridRow> 

        </Grid>
    </div>)
   }

}
export default AboutUs;