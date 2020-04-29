import React, { Component } from 'react';
import './Dashboard_Style.css';
import {Segment, Grid, Checkbox, Divider, Button, GridColumn, Select} from 'semantic-ui-react';
import Column from './Column';


const selectOptions = [
    {key: 'hu', value: 'hu', text: 'Hulu'},
    {key: 'hb', value: 'hb', text: 'HBO'},
    {key: 'net', value: 'net', text: 'Netflix'},
    {key: 'crun', value: 'crun', text: 'Crunchy Roll'}
    
]

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
            channel: "",
            source: "",
            isMovie: true,
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
        if (this.state.isHulu === !true) {
            this.setState({channel: 'hulu', source: 'hulu'});
            console.log("Checked Shows Hulu: "+this.state.channel);
            console.log("Checked Movie Hulu: "+this.state.source);
            this.checkCheckFunction();
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
           this.setState({channel: 'hbo', source: 'hbo'});
           console.log("Checked HBO: "+this.state.channel);
           console.log("Checked Movie HBO: "+this.state.source);
           this.checkCheckFunction();
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
            this.setState({channel: 'netflix', source: 'netflix'});
            console.log("Checked Shows Net: "+this.state.channel);
            console.log("Checked Movie Net: "+this.state.sources);
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
        this.checkCheckFunction();
    }

    toggleCrunchy = () => {
        this.setState((prevState) => ({isCrunchy: !prevState.isCrunchy}));
        if(this.state.isCrunchy === !true) {
            this.setState({channel: 'crunchyroll', source: 'crunchyroll'});
            console.log("Checked Shows Crunchy: "+this.state.channel);
            console.log("Checked Movie Crunchy: "+this.state.sources);
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
        /*
         * Movie url for all movies
         */
        // const urls ="http://api-public.guidebox.com/v2/movies?api_key="+this.state.currentKey+"&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;     // DEFAULT
        const urls ="http://api-public.guidebox.com/v2/shows?api_key=" + this.state.currentKey + "&source=free,subscription&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;     // DEFAULT
        const detaultRes = await fetch (urls);
        console.log(urls);
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
        // const url = "http://api-public.guidebox.com/v2/movies?api_key="+this.state.currentKey+"&sources=" + this.state.source + "&off=" + this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;
        const url = "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel="+this.state.channel+"&source=free,subscription&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit;
        fetch(url)
            .then( d => d.json())
            .then( d => {
                this.setState( {
                    item : d.results,
                    searchedURL : url
                })
            })
    }

    // selectedItem = () => {
    //     var x = document.getElementById('sourceSelection').option[0].value;
    //     if(x == 'Hulu') {
    //         console.log("HULU");
    //     }
    // }

  render() {
     

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
                        {/* <input className = 'ui search' type = 'search' value = {searchResults} placeholder = "Search Filter" onChange = {this.handleSearch}/> */}
                        <button onClick = {this.checkCheckFunction} >Search</button>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "Hulu" onChange={this.toggleHulu} checked = {this.state.isHulu}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "HBO" onChange={this.toggleHBO} checked = {this.state.isHbo}> </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "Netflix" onChange={this.toggleNet} checked = {this.state.isNetflix} > </Checkbox>
                    </Grid.Column>
                    <Grid.Column className="Column">
                        <Checkbox label = "CrunchyRoll" onChange={this.toggleCrunchy} checked = {this.state.isCrunchy}> </Checkbox>
                    </Grid.Column>
                    {/* <Grid.Column class = 'one wide column'>
                        <select id = 'sourceSelection' placeholder = 'Select Source' onChange = {this.selectedItem(this.id)} style = {{width: 200}}> 
                            <option value = 'hulu'> Hulu</option>
                            <option value = 'hbo'> HBO</option>
                            <option value = 'net'> Netflix</option>
                            <option value = 'crun'> Crunchy Roll</option>
                        </select>
                    </Grid.Column> */}
                    {/* <Grid.Column class = 'four wide column'>
                        <button onClick = {this.checkCheckFunction} >Search</button>
                    </Grid.Column> */}
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
                            <Column colContent = {value} isMovie= {true} /> 
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