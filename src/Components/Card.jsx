import React from 'react'
import "../Styles/card.css"

export const Card = (props) => {
    const movie = props.data;
    return (
    <div className='card'>
        <div>
            <img src={movie.poster_path} alt="" />
        </div>
        <div className='about'>
            <h3>{movie.title}</h3>
            <h5>Released Date :- {movie.release_date}</h5>
            <h5>Ratings :- {movie.vote_average}</h5>
        </div>
    </div>
  )
}
