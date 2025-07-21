import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    return (

    
    <div className='w-48 p-2 hover:scale-105 transform transition duration-200 ease-in-out'>
        <img
        className='rounded-lg' 
        src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard