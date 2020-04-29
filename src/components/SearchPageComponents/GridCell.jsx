import React, { Component, Route, Link } from 'react';
import {Divider, Image, Label, Segment, Container} from 'semantic-ui-react';
import Contents from '../Profile/ContentsProfile';

class GridCell extends Component {
    constructor(props) {
        super(props);
        
        
    }

    imageClick = () => {
        const moviesUrl = "http://api-public.guidebox.com/v2/movies/" + this.props.id + "?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1";
        const showsUrl = "http://api-public.guidebox.com/v2/shows/" + this.props.id + "?api_key=39145758a7c7ad3266d0a97c13643cecaeb109e1";

        if (this.props.type == "movie") {
            urlToBePassed = moviesUrl;
        }
        else {
            urlToBePassed = showsUrl;
        }
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
                    {/* <Link to = {Contents}> */}
                        <Image src={this.props.art} />
                    {/* </Link> */}
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