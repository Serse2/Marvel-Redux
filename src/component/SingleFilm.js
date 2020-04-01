import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SingleFilm extends Component {
    render() {
        const {title, startYear, thumbnail} = this.props.film;
        const {index} = this.props
        return (
            <div className="s-card">
                <h2>Title: {title}</h2>
                <p>Year: {startYear}</p>
                <Link to={`/film/${index}`}>
                    <img src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} alt={title}/>
                </Link>
            </div>
        )
    }
}
