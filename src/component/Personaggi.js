import React, { Component } from 'react';
import SinglePer from './SinglePer';

export default class Personaggi extends Component {

    componentDidMount = () =>{
        this.props.fetchPersMarvel('characters')
    }


    render() {
            const { error, personaggi, loading } = this.props.personaggi
        if (error) {
            return(
                <div>si è verificato un errore, prego verificare la console{console.log(error)}</div>
            )
        }
        if(loading){
            return (
                <div>Loading....</div>
            )
        }
        return (
            <div>
                <div className="grid-result">
                    {personaggi.map((personaggio, index) => (
                        <SinglePer key={index} personaggio={personaggio}/>
                    ))}
                </div>
                
            </div>
        )
    }
}
