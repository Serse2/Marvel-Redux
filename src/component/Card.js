import React from 'react';
import { useParams } from 'react-router-dom';

const Card = (props) => {

    // Recupero l'Id dal URL
    let {id} = useParams();
    console.log(id)

    let { title, thumbnail, modified, startYear, description }  = props.film.films[id]
    console.log()

    return (
        <div className="grid-result">
            <div className="s-card">
                <h4>Title: {title}</h4>
                <h5>Year: {startYear}</h5>
                <p>Last modification: {modified}</p>
                <img src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} alt={title}/>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
