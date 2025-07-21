import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {

  const movies=useSelector((store)=>store.movies);
  
  if(!movies)
    return;
  return (
    <div className='bg-black'>
      <div className='relative -mt-70 z-20 pl-6'>
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>
      <MovieList title="Popular" movies={movies?.popularMovies}/>
      <MovieList title="Top Rated" movies={movies?.topRatedMovies}/>
      <MovieList title="Up Coming" movies={movies?.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer