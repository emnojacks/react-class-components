import React, { Component } from 'react';

class Film extends Component {
constructor(props){
    super(props)
    this.state = {
        id: this.props.film.id,
        title: this.props.film.title
    }
}
render(){
    let { id, title } = this.state
    return (
    <li key = {id}>{title}</li>
    )
}

}

export default Film;

