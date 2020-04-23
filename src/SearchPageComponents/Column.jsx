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
        <Grid.Column divided verticalAlign = 'middle' stretched>
            <Cell   id = {this.props.colContent.id} 
                    art = {/*this.state.default ? this.state.props.colContent.poster_400x570 :*/ this.props.colContent.artwork_448x252} 
                    title = {this.props.colContent.title} 
                    aired = {this.props.colContent.first_aired}
                    />
        </Grid.Column> );
    }
}
 
export default GridColumn;