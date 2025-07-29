import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetions from './GptMoviesSuggetions'
import { BACK_IMAGE } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
      <img
        className="fixed h-full w-full object-cover -z-10"
        src={BACK_IMAGE}
        alt="Background"
      />
      <GptSearchBar/>
      <GptMoviesSuggetions/>
    </div>
  )
}

export default GptSearch