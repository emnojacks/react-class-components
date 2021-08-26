import React, { Component } from 'react';


class Films extends Component {
//STATE & PROPS
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            loaded: false,
            results: [],
            fname: this.props.fname,
            people: []
        }
        console.log(this.state)
    }
    //what triggers rendering? 
    //mounts, updates, unmounts
    
    async componentDidMount() {
        //does not retrigger the constructor
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let json = await res.json();
        
           this.setState({
                loaded: true,
                results: json
        })
        console.log("these are the films", json)
    }
    
    //challenge 
    //after the results are set, if the people array is empty, get all the people from each film
    
    //this is the same goal as useeffect()
    async componentDidUpdate(results) {
        console.log("this is being passed from componentdidmount" , results)
        let pplres = await fetch("https://ghibliapi.herokuapp.com/people/")
        let ppljson = await pplres.json();
        
        this.setState({
            people: ppljson
        })
        console.log("these are the people", ppljson)
    }
    
    render() {
        //   let { favNumber } = this.props
    return (
            <div>
            {/* {favNumber} */}
            <h1>Films</h1>
                {!this.state.loaded
                ? "Loading"
                //display films with a custom class component
                    :
                    this.state.results.map((film, index) => <li key={index}>{film.title}</li>
                        //better idea to use ids as keys instead of index
                ) 
                }
                <h2>People</h2>
            {this.state.people.map((film, id) => <li key={film.id}>{film.name}</li>)}
            <br></br>
            </div>
     
            )
        }
    }
    
export default Films;