import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props) {
        super();

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            isFave: false
        }
    }

    handleClick = (e) => {
        console.log("handling Fave click!");
        e.stopPropagation();
        this.setState({
            isFave: !this.state.isFave
        })
    }


    render() {

        let className;
        
        if (this.state.isFave) {
            className = "film-row-fave add_to_queue";
        } else {
            className = "film-row-fave remove_from_queue"
        }

        return (
            <div className= {className} onClick={this.handleClick} >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}
