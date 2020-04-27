import React, { Component } from 'react';
import './Dashboard_Style.css';
import {Segment, Grid, Checkbox, Divider, Button, GridColumn} from 'semantic-ui-react';
import Column from './Column';

class SearchPage extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            type: '',
            limit :25,
            onLoadOffSet : 0,
            onLoadLimit: 250,
            offset: 0,
            isLoading: false,
            isHulu : false,
            isHbo : false,
            isNetflix: false,
            isCrunchy : false,
            url: null,
            searchedURL: '',
            huluItem: [],
            hboItem: [],
            netflixItem: [],
            crunchyItem: [],
            item: [],
            results: [], 
            value: '', 
            searchResults: "",
            searchValue: "",
            currentKey : "ccf1ed5498d72688a162e4e752bfe1463f2440a2",
            channel: null,
        }
    }

    handleSearch = (event) => {
        const query = event.target.value;
        this.setState({searchResults : query, isLoading: true})
        // console.log(this.state.searchResults);
    }


    /*
    * Handle each Check box Toggle
    */
   toggleHulu = () => {
        this.setState((prevState) => ({isHulu: !prevState.isHulu}));
        this.setState({channel: 'hulu'});
        console.log("Checked Hulu: "+this.state.channel);
        if (this.state.isHbo) {
            this.toggleHBO();
        }
        if (this.state.isNetflix) {
            this.toggleNet();
        }
        if (this.state.isCrunchy) {
            this.toggleCrunchy();
        }
        this.checkCheckFunction();
   }
    
   toggleHBO = () => {
       this.setState((prevState) => ({isHbo: !prevState.isHbo}));
       this.setState({channel: 'hbo'});
       console.log("Checked HBO: "+this.state.channel);
       if (this.state.isHulu) {
            this.toggleHulu();
       }
       if (this.state.isNetflix) {
           this.toggleNet();
       }
       if (this.state.isCrunchy) {
           this.toggleCrunchy();
       }
       this.checkCheckFunction();
    }
        


    toggleNet = () => {
        this.setState((prevState) => ({isNetflix: !prevState.isNetflix}));
        this.setState({channel: 'netflix'});
        console.log("Checked Net: "+this.state.channel);
        if (this.state.isHulu) {
            this.toggleHulu();
        }
        if (this.state.isHbo) {
           this.toggleHBO();
        }
        if (this.state.isCrunchy) {
           this.toggleCrunchy();
        }
        this.checkCheckFunction();
    }

    toggleCrunchy = () => {
        this.setState((prevState) => ({isCrunchy: !prevState.isCrunchy}));
        this.setState({channel: 'crunchyroll'});
        console.log("Checked Crunchy: "+this.state.channel);
        if (this.state.isHulu) {
            this.toggleHulu();
       }
       if (this.state.isNetflix) {
           this.toggleNet();
       }
       if (this.state.isHbo) {
           this.toggleHBO();
       }
       this.checkCheckFunction();

    }

    nextLimitTog = () => this.setState((prevLimit) => ({currNextLimit: prevLimit.currNextLimit+25}));
    prevLimitTog = () => this.setState((prevLimit) => ({currPrevLimit: prevLimit.currPrevLimit-25}));

    nextOffTog = () => this.setState((prevOff) => ({currNextOff: prevOff.currNextOff+25}));
    prevOffTog = () => this.setState((prevOff) => ({currPrevOff: prevOff.currPrevOff-25}));

    handleShowMore = () => {
        this.setState({
            offset: 
                this.state.offset < this.state.limit ?
                this.state.offset + 25 : this.state.offset
            , 
            limit: 
                this.state.limit < this.state.item.length -1 ? 
                    this.state.limit + 25 : this.state.limit
            });
            console.log("offset++: " +this.state.offset);
            console.log("limit++: " +this.state.limit);
    }

    handleShowLess = () => {

        this.setState({
            offset: 
                this.state.offset > 0 ?
                this.state.offset - 25 : this.state.offset
            , 
            limit: 
                this.state.limit >25 ? 
                this.state.limit - 25 : this.state.limit
            });
            console.log("offset--: " +this.state.offset);
            console.log("limit--: " +this.state.limit);
    }

    changeType = () => {
        this.setState((prevType) => ({type: !prevType.type}));
    }

    
    
    async componentDidMount() {
        const urls ="http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&source=free,subscription&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;     // DEFAULT
        const detaultRes = await fetch (urls);
        const defaultData = await detaultRes.json();
        this.setState({ 
            item: defaultData.results,
            isLoading: false,
            searchedURL : urls,
        }, () => {
            console.log(this.state.item);
        });
        console.log("offset--: " +this.state.offset);
        console.log("limit--: " +this.state.limit);
    }


    checkCheckFunction = () => {
        const url = "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel="+this.state.channel+"&source=free,subscription&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;     // HBO
        fetch(url)
            .then( d => d.json())
            .then( d => {
                this.setState( {
                    item : d.results,
                    searchedURL : url
                })
            })
    }

  render() {
        const { searchResults } = this.state

        if (this.state.isLoading || !this.state.item.length) {
            return (<Divider> Loading...</Divider>)
        }

        

        // if (this.state.isHbo) {
        //     return (
        //         <div>
        //             {this.updateItem}
        //         </div>
        //     )
        // }

    return ( 
        
        <Segment class = 'searchBackground' style = {{width: 1200, backgroundColor: 'transparent'}} >
            <Grid>
                <Grid.Row columns={5} class = 'checkRow'>
                    <Grid.Column >
                        <input className = 'ui search' type = 'search' value = {searchResults} placeholder = "Search Filter" onChange = {this.handleSearch}/>
                        <button onClick = {this.checkCheckFunction} >Search</button>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "Hulu" onChange={this.toggleHulu} checked = {this.state.isHulu} onclick = {this.toggleHulu}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "HBO" onChange={this.toggleHBO} checked = {this.state.isHbo} onclick = {this.toggleHBO}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "Netflix" onChange={this.toggleNet} checked = {this.state.isNetflix} onclick = {this.toggleNet}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                    <Checkbox label = "CrunchyRoll" onChange={this.toggleCrunchy} checked = {this.state.isCrunchy} onclick = {this.toggleCrunchy}> </Checkbox>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={5}>
                    <Grid.Column class = 'two wide column'> 
                        <Button primary style = {{width: 400}}> Movies </Button>
                    </Grid.Column>
                    <Grid.Column class = 'one wide column'> </Grid.Column>
                    <Grid.Column class = 'two wide column'> 
                        <Button primary style = {{marginLeft: 225, width: 400}}> Shows </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns = {5}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column class = 'one wide column'>
                        <Button id = 'prev' secondary style = {{width: 150, fontSize: 15, padding: -5}} primary  onClick = {this.handleShowLess}> Previous </Button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                   <Grid.Column class = 'two wide column'>
                        <Button id = 'next' secondary style = {{width: 150, fontSize: 15, padding: -5}} primary onClick = {this.handleShowMore}>Next</Button>
                   </Grid.Column>
                </Grid.Row>   
                <Grid.Row columns = {5}>
                    {this.state.item.slice(this.state.offset, this.state.limit).map( (value) => (
                        <React.Fragment key={value.id}>
                            <Column colContent = {value} isDefault = {true} /> 
                        </React.Fragment>
                            )
                    )}
                </Grid.Row>
                <Grid.Row columns = {5}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Button id = 'prev' style = {{width: 150, fontSize: 15, padding: -5}} primary  onClick = {this.handleShowLess}> Previous </Button>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                   <Grid.Column>
                        <Button id = 'next' style = {{width: 150, fontSize: 15, padding: -5}} primary onClick = {this.handleShowMore}>Next</Button>
                   </Grid.Column>
                   <Grid.Column></Grid.Column>
                </Grid.Row> 
            </Grid>
        </Segment>
      )
  }

    

}

export default SearchPage;