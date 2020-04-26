import React, { Component } from 'react';
import './SearchPage.css';
import {Segment, Grid, Checkbox, Divider, Button, GridColumn} from 'semantic-ui-react';
import Column from './Column';

class SearchPage extends Component {

    constructor(props) { 
        super(props);
        // const { totalRecords = null, pageLimit = 25, pageNeighbours = 0} = props;
        // this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 25;
        // this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
        // this.pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;
        // this.totalPages = Math.ceil(this.totalRecords/this.pageLimit);
        this.state = {
            // currentPage: 1,
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
            searchURL: '',
            huluItem: [],
            hboItem: [],
            netflixItem: [],
            crunchyItem: [],
            item: [],
            results: [], 
            value: '', 
            searchResults: "",
            searchValue: "",
            currentKey : "ccf1ed5498d72688a162e4e752bfe1463f2440a2"
        }

    }

    handleSearch = (event) => {
        const query = event.target.value;
        this.setState({searchResults : query, isLoading: true})
        // console.log(this.state.searchResults);
    }

    updateItem = () => {
        this.state (
            {
                item: (!this.state.isHBO && !this.state.isNetflix && !this.state.isHulu && !this.state.isCrunchy) ? this.state.item : this.state.item,
                item: (this.state.isHBO && !this.state.isNetflix && !this.state.isHulu && !this.state.isCrunchy) ? this.state.hboItem : this.state.item,
                item: (!this.state.isHBO && this.state.isNetflix && !this.state.isHulu && !this.state.isCrunchy) ? this.state.netflixItem : this.state.item,
                item: (!this.state.isHBO && !this.state.isNetflix && this.state.isHulu && !this.state.isCrunchy) ? this.state.huluItem : this.state.item,
                item: (!this.state.isHBO && !this.state.isNetflix && !this.state.isHulu && this.state.isCrunchy) ? this.state.crunchyItem : this.state.item,
            }
        )
    }


    /*
    * Handle each Check box Toggle
    */
    toggleHBO = () => this.setState(
        (prevState) => (
            {isHbo: 
                this.state.isHbo ? {item: this.updateItem} : !prevState.isHbo})
        );

    toggleHulu = () => this.setState((prevState) => ({isHulu: !prevState.isHulu}));
    toggleNet = () => this.setState((prevState) => ({isNetflix: !prevState.isNetflix}));
    toggleCrunchy = () => this.setState((prevState) => ({isCrunchy: !prevState.isCrunchy}));

    nextLimitTog = () => this.setState((prevLimit) => ({currNextLimit: prevLimit.currNextLimit+25}));
    prevLimitTog = () => this.setState((prevLimit) => ({currPrevLimit: prevLimit.currPrevLimit-25}));

    nextOffTog = () => this.setState((prevOff) => ({currNextOff: prevOff.currNextOff+25}));
    prevOffTog = () => this.setState((prevOff) => ({currPrevOff: prevOff.currPrevOff-25}));

    // fetchSearchResults = (query) => {
    //     const searchedURL = "http://api-public.guidebox.com/v2/search?api_key=1ab912438c434b623dae1038a3c9ca5ba9550d37&type=shows*field=title&query=${query}&off=0&limit=25"
    //     this.setState(searchedURL);
    // }

    handleShowMore = () => {
        this.setState({
            offset: 
                this.state.offset < this.state.limit ?
                this.state.offset + 25 : this.state.offset
            , 
            limit: 
                this.state.limit < this.state.item.length ? 
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

    
    
    async componentDidMount() {
        const urls = [
            "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit,     // DEFAULT
            "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel=hbo&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit,     // HBO
            "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel=hulu&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit,    // HULU
            "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel=netflix&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit, // NETFLIX
            "http://api-public.guidebox.com/v2/shows?api_key="+this.state.currentKey+"&channel=crunchyroll&off="+this.state.onLoadOffSet + "&limit=" + this.state.onLoadLimit,  // CRUNCHYROLL
        ]
        // urls.map((stringJSON) => {
        //     console.log(stringJSON);
        // })
        const detaultRes = await fetch (urls[0]);
        const defaultData = await detaultRes.json();
        this.setState({ 
            item: defaultData.results,
            isLoading: false,
        }, () => {
            console.log(this.state.item);
        });

        // const huluRes = await fetch (urls[1]);
        // const huluData = await huluRes.json();
        // this.setState({ 
        //     huluItem: huluData.results,
        //     isLoading: false,
        // }, () => {
        //     console.log(this.state.huluItem);
        // });

        // const hboRes = await fetch (urls[2]);
        // const hboData = await hboRes.json();
        // this.setState({ 
        //     hboItem: hboData.results,
        //     isLoading: false,
        // }, () => {
        //     console.log(this.state.hboItem);
        // });

        // const netflixRes = await fetch (urls[2]);
        // const netflixData = await netflixRes.json();
        // this.setState({ 
        //     netflixItem: netflixData.results,
        //     isLoading: false,
        // }, () => {
        //     console.log(this.state.netflixItem);
        // });

        // const crunchyRes = await fetch (urls[2]);
        // const crunchyData = await crunchyRes.json();
        // this.setState({ 
        //     crunchyItem: crunchyData.results,
        //     isLoading: false,
        // }, () => {
        //     console.log(this.state.crunchyItem);
        // });
        
        console.log("offset--: " +this.state.offset);
        console.log("limit--: " +this.state.limit);
        // console.log(data);
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
        
        <Segment class = 'searchBackground' style = {{width: , backgroundColor: 'transparent'}} >
            <Grid>
                <Grid.Row columns={5} class = 'checkRow'>
                    <Grid.Column >
                        <input className = 'ui search' type = 'search' value = {searchResults} placeholder = "Search Filter" onChange = {this.handleSearch}/>
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