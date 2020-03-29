import React, { Component } from 'react'
import filmReducer from '../redusers/film'

export default class SingleFilm extends Component {
    render() {
        const {title, startYear, thumbnail} = this.props.film
        return (
            <div className="s-film">
                <h2>Title: {title}</h2>
                <p>Year: {startYear}</p>
                <img src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} alt={title}/>
            </div>
        )
    }
}
