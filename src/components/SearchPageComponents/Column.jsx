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
                    art = {this.props.colContent.poster_240x342} 
                    title = {this.props.colContent.title} 
                    aired = {this.props.colContent.first_aired}
                    />
        </Grid.Column> );
    }
}
 
export default GridColumn;