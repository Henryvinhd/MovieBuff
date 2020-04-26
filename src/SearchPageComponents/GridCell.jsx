import React, { Component } from 'react';
import {Divider, Image, Label, Segment} from 'semantic-ui-react';

class GridCell extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Divider style = {{borderStyle: 'double', borderColor: 'red', borderWidth: 4, backgroundColor: 'transparent', width: 200, height: 220, }}>
                <Segment rasied textAlign = 'center' style = {{height: 25}}>
                        <Label attached = 'top' size = 'small' color= 'red'>
                            {this.props.title}
                        </Label>
                </Segment>
                <Segment rasied style = {{height: 125, backgroundColor: 'cyan'}}>
                    <Image src={this.props.art} href = {this.props.art}/>
                </Segment>
                    {/* <Label as ='a' color = 'red' basic size = 'small' style = {{margin: 10}}> {this.props.id} </Label> */}
                <Segment rasied textAlign = 'center' style = {{height: 25}}>
                    <Label as = 'a' attached = 'bottom' size ='small' color = 'red'>First Aired: {this.props.aired}</Label>
                </Segment>
            </Divider>
        );
    }
}

export default GridCell;