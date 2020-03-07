import React, { Component } from 'react';
import './SearchPage.css';
import {Segment, Grid, Image} from 'semantic-ui-react'
import buffLogo from './Images/image0.jpg';

const initialState = { 
    isLoading: false, 
    results: [], 
    value: ''
}

const Rows = () => (
    <Grid.Row columns={4}>
        <Grid.Column>
            <Image src={buffLogo} />
        </Grid.Column>
        <Grid.Column>
            <Image src={buffLogo} />
        </Grid.Column>
        <Grid.Column>
            <Image src={buffLogo} />
        </Grid.Column>
        <Grid.Column>
            <Image src={buffLogo} />
        </Grid.Column>
    </Grid.Row>
  )

class SearchPage extends Component {
    state = initialState;

  render() {
    return ( 
        <Segment className='searchBackground'>
            <Grid>
                        
                <Rows />
                <Rows />
                <Rows />
                        
            </Grid>
        </Segment>
      
    )
  }
}
export default SearchPage;