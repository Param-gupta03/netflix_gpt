import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const movieTrailer=useSelector((store)=>store.movies?.movieTrailer);
    useMovieTrailer(movieId={movieId});
    if(movieTrailer==null)return;

  return (
    <div className='w-screen'>
    <iframe 
     className="w-screen aspect-video"
     allow="autoplay"
     src={`https://www.youtube.com/embed/${movieTrailer.key}?&autoplay=1&mute=1`}
     title="YouTube video player"
     allowFullScreen
     
    >
    </iframe>
    </div>


  )
}

export default VideoBackground