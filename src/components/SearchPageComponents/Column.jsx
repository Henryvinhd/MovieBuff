import React, { Component } from 'react';
import Cell from './GridCell';
import {Grid} from 'semantic-ui-react';

class GridColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: props.isDefault,
        }
    }

    render() { 
        return ( 
        <Grid.Column divided verticalAlign = 'middle' stretched style = {{width: 220}}>
            <Cell   id = {this.props.colContent.id} 
                    art = {this.props.isMovieType ? this.props.colContent.poster_120x171 : this.props.colContent.artwork_448x252}        // poster_120x171 || artwork_448x252 
                    title = {this.props.colContent.title} 
                    aired = {this.props.isMovieType? this.props.colContent.release_year : this.props.colContent.first_aired}
                    isMovieType = {this.props.isMovieType}
                    currType = {this.props.type}
                    />
        </Grid.Column> );
    }
}
 
export default GridColumn;