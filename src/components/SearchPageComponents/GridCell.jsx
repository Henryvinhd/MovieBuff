import React, { Component } from 'react';
import {Divider, Image, Label, Segment, Container} from 'semantic-ui-react';
import ContentProfile from '../Profile/ContentProfile'

class GridCell extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Divider style = {{borderStyle: 'double', borderColor: 'red', borderWidth: 4, backgroundColor: 'transparent', width: 200, height: 220, }}>
                <Segment rasied textAlign = 'center' style = {{height: 25, width: 190}}>
                        <Label attached = 'top' size = 'small' color= 'red'>
                            {this.props.title}
                        </Label>
                </Segment>
                <Container style = {{height: 125, backgroundColor: 'white'}}>
                    {/* <Image src={this.props.art} href = {"http://api-public.guidebox.com/v2/shows/" + this.props.id + "?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1"}/> */}
                    {/* <a target="_blank" href={"http://api-public.guidebox.com/v2/shows/" + this.props.id + "?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1"} class="ui medium image">   <img src={this.props.art}/> </a> */}
                    <a target="_blank" href={ContentProfile} class="ui medium image">   <img src={this.props.art}/> </a>
                </Container>
                    {/* <Label as ='a' color = 'red' basic size = 'small' style = {{margin: 10}}> {this.props.id} </Label> */}
                <Segment rasied textAlign = 'center' style = {{height: 25, width: 190}}>
                    <Label as = 'a' attached = 'bottom' size ='small' color = 'red'>First Aired: {this.props.aired}</Label>
                </Segment>
            </Divider>
        );
    }
}

export default GridCell;