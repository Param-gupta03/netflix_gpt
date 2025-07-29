import React from 'react'
import { IMG_CDN } from '../utils/constants'
import MovieData from './MovieData'

const MovieCard = ({posterPath,onClick,vote}) => {

  if(!posterPath||vote<5)return;
  
    return (
    <div className='w-50 p-2 hover:scale-94 transform transition duration-200 ease-in-out cursor-pointer'
    onClick={onClick}>
        <img
        className='rounded-lg' 
        src={IMG_CDN+posterPath}/>
        
    </div>
  )
}

export default MovieCard