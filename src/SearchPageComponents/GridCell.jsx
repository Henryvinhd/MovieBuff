import React, { Component } from 'react';
import {Divider, Image, Label, Segment} from 'semantic-ui-react';

class GridCell extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Divider style = {{borderStyle: 'groove', borderColor: 'red', borderWidth: 10 }}>
                <Segment rasied padded textAlign = 'center' style = {{height: 200}}>
                    {/* <Header block>  */}
                        <Label attached = 'top' size = 'small' color= 'red'>
                            {this.props.title}
                        </Label>
                    {/* </Header> */}
                    
                    <Image as = 'a' src={this.props.art} href = {this.props.art}fluid size = 'large' style = {{marginTop: 50}}/>
                    <Label as ='a' color = 'red' basic size = 'small' style = {{margin: 10}}> {this.props.id} </Label>
                    <Label as = 'a' attached = 'bottom' size ='small' color = 'red'>First Aired: {this.props.aired}</Label>
                </Segment>
            </Divider>
        );
    }
}

export default GridCell;