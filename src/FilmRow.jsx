import React, { Component } from 'react';
import Fave from './Fave';

export default class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title}`)
    }

    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`;
        return (
                <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                    <img src={posterUrl} alt="poster" />

                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date}</p>
                    </div>

                    <Fave />
                </div> 
        )
    }
}
