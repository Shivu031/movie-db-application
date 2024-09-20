import React from 'react'

const MovieCard = ({ movie, rating, image, imdb_url }) => {
  return (
    <div className="card" style={{width: "18rem;"}}>
        <img src={image} alt={movie} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{movie}</h5>
            <p className="card-text">Rating: {rating}</p>
            <a href={imdb_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on IMDb</a>
        </div>
    </div>
  )
}

export default MovieCard
