import React, { Component } from 'react';
import SingleFilm from './SingleFilm';

export default class Film extends Component {
    state = {
        aggiungiFilm: 'inserisci il film che vuoi',
        film: []
    }

    componentDidMount = () =>{
        this.props.fetchMarvel('series')
    }

    handleFilm = (e) =>{
        e.preventDefault()
        const { aggiungiFilm } = this.state
        this.props.addFilm(aggiungiFilm)
    }
    handelAggiungiFilm = (e) => {
        const { name } = e.target
        this.setState({
            [name]: e.target.value
        })
    }

    render() {

        const { error, films, loading } = this.props.film
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
                <form onSubmit={this.handleFilm} hidden>
                    <input name="aggiungiFilm" defaultValue={this.state.aggiungiFilm} onChange={this.handelAggiungiFilm}/>
                    <button type="submit" className="btn" >Aggiungi i film</button>
                </form>
                <div className="grid-result">
                    {films.map((film, index) => (
                        <SingleFilm key={index} film={film} index={index}/>
                    ))}
                </div>
                
            </div>
        )
    }
}
