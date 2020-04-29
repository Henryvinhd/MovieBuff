import React, { Component } from 'react';
import './Dashboard_Style.css';
import {Segment, Grid, Checkbox, Divider, Button, Label, Container, Image, Loader} from 'semantic-ui-react';
// import Column from './Column';
import Content from '../Profile/ContentsProfile';


const Column = (props) => {
    return ( 
        <Grid.Column style = {{marginBottom: 25, borderStyle: "double", borderWidth: 4, borderColor: "red"}} verticalAlign = 'middle'>
            {
                console.log("Col ID: "+props.colContent.id),
                console.log("Col Type: " + props.currType)
            }
            <Cell   id = {props.colContent.id} 
                    art = {props.isMovieType ? props.colContent.poster_120x171 : props.colContent.artwork_448x252}        // poster_120x171 || artwork_448x252 
                    title = {props.colContent.title}
                    aired = {props.isMovieType ? props.colContent.release_year : props.colContent.first_aired}
                    isMovieType = {props.isMovieType}
                    type = {props.currType}
                    togContent = {props.showContent}
                    sendInfoCol = {props.sendInfo}
                    />
        </Grid.Column> );
}

const Cell = (props) => {
    return ( 
        <Container fluid = {true}style = {{height: 250}} >
            <Divider rasied textAlign = 'center' style = {{height: 25, width: 225}} >
                    <Label attached = 'top' size = 'small' color= 'red'style = {{width: 210}}>
                        {props.title}
                    </Label>
            </Divider>
            <Divider style = {{marginTop: -25, height: 200, width: 250}} >
                <Button onClick = {() => props.togContent(props.type, props.id)} style = {{ marginLeft: -25, height: 220, width: 200,  backgroundColor: "rgba(0,0,0,.9)"}}>
                {/* <Link to = {Contents}> */}
                    <Image style = {props.isMovieType ? {marginLeft: 15}: {marginLeft: 0}} src={props.art}/>
                {/* </Link> */}
                </Button>
            </Divider>
                {/* <Label as ='a' color = 'red' basic size = 'small' style = {{margin: 10}}> {this.props.id} </Label> */}
            <Divider style = {{height: 25, width: 225}}>
                <Label as = 'a' attached = 'bottom' size ='small' color = 'red' style = {{width: 210}}>First Aired: {props.aired}</Label>
            </Divider>
        </Container>
    );
}

const CheckTogComponent = (checkProps) => {
    return (
        <Grid.Row columns={5} class = 'checkRow' style = {checkProps.showContent ? {display: "none"} :{display: "inline"}}>
            <Grid.Column >
                <Segment compact>
                    <Button  color = 'info'> Search </Button>
                </Segment>
            </Grid.Column>
            <Grid.Column className="Column">
                <Checkbox toggle label = "Hulu" onChange={checkProps.hulu[0]} checked = {checkProps.hulu[1]}> </Checkbox>
            </Grid.Column>
            <Grid.Column className="Column">
                <Checkbox toggle label = "HBO" onChange={checkProps.hbo[0]} checked = {checkProps.hulu[1]}> </Checkbox>
            </Grid.Column>
            <Grid.Column className="Column">
                <Checkbox toggle label = "Netflix" onChange={checkProps.net[0]} checked = {checkProps.net[1]} > </Checkbox>
            </Grid.Column>
            <Grid.Column className="Column">
                <Checkbox toggle label = "CrunchyRoll" onChange={checkProps.crun[0]} checked = {checkProps.crun[1]}> </Checkbox>
            </Grid.Column>
        </Grid.Row>
    )
}

const Movie_Shows_Component = (movieShowProps) => {
    // showContent = {this.state.contentProfileVisibility}
    // movieSel = {this.toggleMovieVisibility, this.state.movieVisibility}
    // showsSel = {this.toggleShowVisibility, this.state.showVisibility}
    return (
        <Grid.Row columns={5} style = {movieShowProps.showContent ? {display: "none"} :{display: "inline"}}>
            <Grid.Column width = {8}> 
                <Button className= {movieShowProps.movieSel[1]? "ui inverted primary button" : "ui inverted red button"} style = {{marginLeft: 150, width: 350}} onClick = {movieShowProps.movieSel[0]}  > Movies </Button>
            </Grid.Column>
            <Grid.Column width = {2}> 
                <Button className = {movieShowProps.showsSel[1] ? "ui inverted primary button" : "ui inverted red button"} style = {{width: 350}} onClick = {movieShowProps.showsSel[0]}> Shows </Button>
            </Grid.Column>
        </Grid.Row>
    )
}

const Prev_Next_Button = (prevNextProp) => {
    return (
        <Grid.Row columns = {5} style = {prevNextProp.showContent ? {display: "none"} :{display: "inline"}}>
            <Grid.Column></Grid.Column>
            <Grid.Column class = 'one wide column'>
                <Button id = 'prev' style = {{width: 150, fontSize: 15, padding: -5}}   onClick = {prevNextProp.prev}> Previous </Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column class = 'two wide column'>
                    <Button id = 'next' style = {{width: 150, fontSize: 15, padding: -5}} onClick = {prevNextProp.net}>Next</Button>
            </Grid.Column>
        </Grid.Row>
    )
}

class SearchPage extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            isLoading: true,
        // display States
            movieVisibility: true,
            showVisibility: false,
            contentProfileVisibility: false,
            previousState: false,
            type: "movies",
        
        // CheckBoxes States
            isHulu : false,
            isHbo : false,
            isNetflix: false,
            isCrunchy : false,

        // Limit and OffSet States  
            limit :25,
            onLoadOffSet : 0,
            onLoadLimit: 250,
            offset: 0,

        // Array Item State
            item: [],

        // API Key State
            currentKey : "39145758a7c7ad3266d0a97c13643cecaeb109e1",
            
        
        // channel state for the shows API
            channel: "",
        
        // source for the movies API
            source: "",

        // Updated URL state will change based on Checks and Movie/Shows Option
            updatedURL: '',

        // Sending States to be passed to ContentsProfile
            sendingCurrType: '',
            sendingItemID: '',
        }
    }

    /*
    * Handle each Check box Toggle
    */
    toggleHulu = () => {
            this.setState((prevState) => ({isHulu: !prevState.isHulu}));
            if (this.state.isHulu === !true) {
                this.setState({channel: 'hulu', source: 'hulu'}, 
                    () => {
                        console.log("Checked Shows Hulu: "+this.state.channel);
                        console.log("Checked Movie Hulu: "+this.state.source);
                        this.updateFetchOnCheck(this.state.channel, this.state.source);
                    });
            }
            if (this.state.isHbo) {
                this.toggleHBO();
            }
            if (this.state.isNetflix) {
                this.toggleNet();
            }
            if (this.state.isCrunchy) {
                this.toggleCrunchy();
            }
            
    }
    
    toggleHBO = () => {
       this.setState((prevState) => ({isHbo: !prevState.isHbo}));
       if (this.state.isHbo === !true) {
           this.setState({channel: 'hbo', source: 'hbo'},
           () => {
               console.log("Checked Shows HBO: "+this.state.channel);
               console.log("Checked Movie HBO: "+this.state.source);
               this.updateFetchOnCheck(this.state.channel, this.state.source);
           });
        }
       if (this.state.isHulu) {
            this.toggleHulu();
       }
       if (this.state.isNetflix) {
           this.toggleNet();
       }
       if (this.state.isCrunchy) {
           this.toggleCrunchy();
       }
       
    }

    toggleNet = () => {
        this.setState((prevState) => ({isNetflix: !prevState.isNetflix}));
        if(this.state.isNetflix === !true) {
            this.setState({channel: 'netflix', source: 'netflix'}, 
                () => {
                    console.log("Checked Shows Net: "+this.state.channel);
                    console.log("Checked Movie Net: "+this.state.source);
                    this.updateFetchOnCheck(this.state.channel, this.state.source);
                });
        }
        if (this.state.isHulu) {
            this.toggleHulu();
        }
        if (this.state.isHbo) {
           this.toggleHBO();
        }
        if (this.state.isCrunchy) {
           this.toggleCrunchy();
        }
    }

    toggleCrunchy = () => {
        this.setState((prevState) => ({isCrunchy: !prevState.isCrunchy}));
        if(this.state.isCrunchy === !true) {
            this.setState({channel: 'crunchyroll', source: 'crunchyroll'},
                () => {
                console.log("Checked Shows Crunchy: "+this.state.channel);
                console.log("Checked Movie Crunchy: "+this.state.source);
                this.updateFetchOnCheck(this.state.channel, this.state.source);
                });
        }
        if (this.state.isHulu) {
            this.toggleHulu();
       }
       if (this.state.isNetflix) {
           this.toggleNet();
       }
       if (this.state.isHbo) {
           this.toggleHBO();
       }
    }

    handleShowMore = () => {
        this.setState({
            offset: 
                this.state.offset < this.state.limit ?
                this.state.offset + 25 : this.state.offset
            , 
            limit: 
                (this.state.limit+25) < this.state.onLoadLimit ? 
                    this.state.limit + 25 : this.state.limit
            }, 
            () => { 
                console.log("offset++: " +this.state.offset);
                console.log("limit++: " +this.state.limit);
            });
    }

    handleShowLess = () => {
        this.setState({
            offset: 
                this.state.offset > 0 ?
                this.state.offset - 25 : this.state.offset
            , 
            limit: 
                this.state.limit > 25 ? 
                this.state.limit - 25 : this.state.limit
            }, 
            () => {
                console.log("offset--: " +this.state.offset);
                console.log("limit--: " +this.state.limit);
            });
    }

    changeType = () => {
        if (this.state.movieVisibility) {
            this.setState({type: "movies"}, 
            () => {
                console.log("Type (Movie) : "+ this.state.type);
            });
        }
        else if (this.state.showVisibility) {
            this.setState({type: "shows"}, 
            () => {
                console.log("Type (Show) : " + this.state.type); 
            });
        }
    }

    getInfoToSendToContents = (type, id) => {
        if(type == null || id == null && (type == null && id == null)) {
            return;
        }
        else {
            this.setState({
                sendingCurrType: type,
                sendingItemID: id
            })
            console.log("ID sent: " + this.state.sendingItemID);
            console.log("Type sent: " + this.state.sendingCurrType);
        }


    }

// function that will be called when page is initially loaded. 
    async componentDidMount() {
        /*
         * Movie url for all movies
         */
        const initialURL ="http://api-public.guidebox.com/v2/"+this.state.type+"?api_key="+this.state.currentKey+"&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;;     // DEFAULT
        // const initialURL = movieData;
        const initJSON = await fetch (initialURL);
        const initData = await initJSON.json();
        this.setState({ 
            item: initData.results,
            updatedURL : initialURL,
            onLoadLimit: initData.results.length,
            isLoading: false,
        }, () => {
            console.log(this.state.item);
            console.log("offset--: " +this.state.offset);
            console.log("limit--: " +this.state.limit);
            console.log("onLoad Limit: " +this.state.onLoadLimit);
            console.log("Show Content? : " + this.state.contentProfileVisibility);
        });
    }

    updateFetchOnCheck = (chanProps, sourceProps) => {
        let url = "";
        if (this.state.movieVisibility && !this.state.showVisibility) {
            url = "http://api-public.guidebox.com/v2/"+this.state.type+"?api_key="+this.state.currentKey+"&sources=" + sourceProps + "&off=" + this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;
        }
        else if (!this.state.movieVisibility && this.state.showVisibility) {
            url = "http://api-public.guidebox.com/v2/"+this.state.type+"?api_key="+this.state.currentKey+"&channel=" + chanProps + "&off=" + this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;
        }
        fetch(url)
            .then( d => d.json())
            .then( d => {
                this.setState( {
                    item : d.results,
                    updatedURL : url
                }, () => {
                    console.log(this.state.item);
                    console.log("New API URL!: "+ this.state.updatedURL);
                })
            })
    }

    updateTypesOnClick = (typeProp) => {
        const url = "http://api-public.guidebox.com/v2/"+typeProp+"?api_key="+this.state.currentKey+"&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;     // DEFAULT
        fetch(url)
            .then( d => d.json())
            .then( d => {
                this.setState( {
                    item : d.results,
                    updatedURL : url
                }, () => {
                    console.log(this.state.item);
                    console.log("New API URL!: "+ this.state.updatedURL);
                })
            }
        )
    }

    toggleMovieVisibility = () => {
        this.setState( {
            movieVisibility: true,
            showVisibility: false,
            contentProfileVisibility: false,
            type : "movies", 
            limit: 25,
            offset: 0,
            
        }, () => {
            console.log("Movie   State: " + this.state.movieVisibility);
            console.log("Show    State: " + this.state.showVisibility);
            console.log("Content State: " + this.state.contentProfileVisibility);
            // this.changeType();
            this.resetAllCheckMarks();
            this.updateTypesOnClick(this.state.type)
        });
    }

    toggleShowVisibility = () => {
        this.setState({
            movieVisibility: false,
            showVisibility: true,
            contentProfileVisibility: false,
            type : "shows",
            limit: 25,
            offset: 0,
        },  () => {
            console.log("Movie   State: " + this.state.movieVisibility);
            console.log("Show    State: " + this.state.showVisibility);
            console.log("Content State: " + this.state.contentProfileVisibility);
            // this.changeType();
            this.resetAllCheckMarks();
            this.updateTypesOnClick(this.state.type)
        });
    }

    toggleContentProfileVisibility = (type, id) => {
        this.setState({
            movieVisibility: false,
            showVisibility: false,
            contentProfileVisibility: true,
            sendingCurrType: type,
            sendingItemID: id,
        }, () => 
        {
            console.log("Movie   State: " + this.state.movieVisibility);
            console.log("Show    State: " + this.state.showVisibility);
            console.log("Content State: " + this.state.contentProfileVisibility);
            console.log("Sending Type: ", this.state.sendingCurrType);
            console.log("Sending ItemID: " + this.state.sendingItemID);
            this.resetAllCheckMarks();
        });
    }

    reverseTogContent = () => {
        if(this.state.contentProfileVisibility) {
            this.setState({
                contentProfileVisibility: !this.state.contentProfileVisibility, 
            }, 
            () => 
            {
                console.log("Movie   State: " + this.state.movieVisibility);
                console.log("Show    State: " + this.state.showVisibility);
                console.log("Content State: " + this.state.contentProfileVisibility);
                this.resetAllCheckMarks();
                this.updateFetchOnCheck(this.state.channel, this.state.source);
            })
        }
    }

    resetAllCheckMarks = () => {
        if (this.state.isHulu) {
            this.setState((prevState) => ({isHulu: !prevState.isHulu}));
        }
        if(this.state.isHbo) {
            this.setState((prevState) => ({isHbo: !prevState.isHbo}));
        }
        if (this.state.isNetflix) {
            this.setState((prevState) => ({isNetflix: !prevState.isNetflix}));
        }
        if(this.state.isCrunchy) {
            this.setState((prevState) => ({isCrunchy: !prevState.isCrunchy}));
        }
    }

  render() {

        if (this.state.isLoading || !this.state.item.length) {
            return (<Divider> 
                 <Segment inverted>
                    <Loader active inverted />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
            </Divider>)
        }

    return  ( 
        <Container fluid = {true} >
            <Grid > 
                <Grid.Row columns={5} class = 'checkRow' style = {this.state.contentProfileVisibility ? {display: "none"} :{display: "inline"}}>
                    <Grid.Column >
                        <Segment compact>
                            <Button  color = 'info'> Search </Button>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox toggle label = "Hulu" onChange={this.toggleHulu} checked = {this.state.isHulu}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox toggle label = "HBO" onChange={this.toggleHBO} checked = {this.state.isHbo}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox toggle label = "Netflix" onChange={this.toggleNet} checked = {this.state.isNetflix} > </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox toggle label = "CrunchyRoll" onChange={this.toggleCrunchy} checked = {this.state.isCrunchy}> </Checkbox>
                    </Grid.Column>
                </Grid.Row>
                {/* <Movie_Shows_Component 
                    showContent = {this.state.contentProfileVisibility}
                    movieSel = {this.toggleMovieVisibility, this.state.movieVisibility}
                    showsSel = {this.toggleShowVisibility, this.state.showVisibility}
                /> */}
                <Grid.Row columns={5} style = {this.state.contentProfileVisibility ? {display: "none"} :{display: "inline"}}>
                    <Grid.Column width = {8}> 
                        <Button className= {this.state.movieVisibility? "ui inverted primary button" : "ui inverted red button"} style = {{marginLeft: 150, width: 350}} onClick = {this.toggleMovieVisibility}  > Movies </Button>
                    </Grid.Column>
                    <Grid.Column width = {2}> 
                        <Button className = {this.state.showVisibility ? "ui inverted primary button" : "ui inverted red button"} style = {{width: 350}} onClick = {this.toggleShowVisibility}> Shows </Button>
                    </Grid.Column>
                </Grid.Row>
                {/* <Prev_Next_Button
                    prev = {this.handleShowLess}
                    next = {this.handleShowMore}
                    showContent = {this.state.contentProfileVisibility}
                /> */}
                <Grid.Row columns = {5} style = {this.state.contentProfileVisibility ? {display: "none"} :{display: "inline"}}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column class = 'one wide column'>
                        <Button id = 'prev' style = {{width: 150, fontSize: 15, padding: -5}}   onClick = {this.handleShowLess}> Previous </Button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column class = 'two wide column'>
                            <Button id = 'next' style = {{width: 150, fontSize: 15, padding: -5}} onClick = {this.handleShowMore}>Next</Button>
                    </Grid.Column>
                </Grid.Row>
                {!this.state.contentProfileVisibility ? 
                    <Grid.Row columns = {5}>
                        {this.state.item.slice(this.state.offset, this.state.limit).map( (value) => (
                            <React.Fragment key={value.id}>
                                <Column 
                                    colContent = {value} 
                                    isMovieType = {this.state.movieVisibility} 
                                    currType = {this.state.type}
                                    showContent = {this.toggleContentProfileVisibility}
                                    /> 
                            </React.Fragment>))}
                        </Grid.Row>
                         :
                        this.state.contentProfileVisibility && 
                        <Grid.Row>
                            <Content 
                                id = {this.state.sendingItemID}
                                type = {this.state.sendingCurrType}
                            />
                        </Grid.Row>}


                <Grid.Row columns = {5} style = {this.state.contentProfileVisibility ? {display: "none"} :{display: "inline"}}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column class = 'one wide column'>
                        <Button id = 'prev' style = {{width: 150, fontSize: 15, padding: -5}}   onClick = {this.handleShowLess}> Previous </Button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column class = 'two wide column'>
                            <Button id = 'next' style = {{width: 150, fontSize: 15, padding: -5}} onClick = {this.handleShowMore}>Next</Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style = {!this.state.contentProfileVisibility ? {display: "none"} :{display: "inline"}}>
                    <Grid.Column>
                        <Button  id = 'Back' secondary style = {{width: 150, fontSize: 15, padding: -5}} onClick = {this.reverseTogContent}>Back to {this.state.movieVisibility ? "Movies" : "Shows" }</Button>
                    </Grid.Column>
                </Grid.Row>
                {/* <Prev_Next_Button
                    prev = {this.handleShowLess}
                    next = {this.handleShowMore}
                    showContent = {this.state.contentProfileVisibility}
                /> */}
            </Grid>
        </Container>
      ) 
  }
}

export default SearchPage;