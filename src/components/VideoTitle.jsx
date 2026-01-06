import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({ title, overview,movieId }) => {
  const navigate=useNavigate();
  return (
    <div className='w-screen aspect-video absolute pt-[10%] px-12 bg-gradient-to-r from-black via-black/60 to-transparent text-white'>
      <h1 className='font-extrabold text-6xl mb-6 drop-shadow-md'>{title}</h1>
      <p className='text-lg font-light w-5/12 mb-8'>{overview}</p>
      <div className='flex gap-4'>
        <button className='gap-2 bg-white text-black font-semibold text-lg px-6 py-2 rounded hover:bg-gray-300'>
           Play
        </button>
        <button className='gap-2 bg-gray-600/80 text-white font-semibold text-lg px-6 py-2 rounded hover:bg-gray-500'
        onClick={() => navigate(`/movieData/${movieId}`)}>
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
