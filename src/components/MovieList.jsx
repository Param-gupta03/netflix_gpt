import React from 'react'
import { IMG_CDN } from '../utils/constants';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if(movies==null)return;
    return (
        <div className='py-4'>
            <div>
            <h1 className='text-2xl text-white font-semibold mb-4 pl-4'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar scroll-smooth'>
            <div className='flex'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}

export default MovieList
