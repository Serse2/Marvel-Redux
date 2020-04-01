import React, { Component } from 'react';

export default class SinglePer extends Component {
    render() {
        const {thumbnail, name} = this.props.personaggio
        return (
            <div className="s-card">
                <h1>{name}</h1>
                <img src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} alt={name}/>
            </div>
        )
    }
}
