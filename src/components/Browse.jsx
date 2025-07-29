import React, { useEffect } from 'react'
import Header from './Header'
import { auth } from '../utils/FireBase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpcomingMovies';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import GptSearch from './GptSearch';

const Browse = () => {
  
  const showGPT=useSelector((store)=>store.gpt.showGptSearch);

  const dispatch=useDispatch();
  const handleGPT=()=>{
    dispatch(toggleGptSearchView());
  }

  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
 
  const navigate=useNavigate();
  const HandleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <div >

      <div className='absolute z-10 w-screen flex justify-between bg-gradient-to-b from-black'>
        <div >
          <Header />
        </div>
        
        <div>
          <button className='font-bold text-white text-xl p-4 bg-purple-800 rounded-3xl cursor-pointer'
          onClick={handleGPT}
          >{showGPT?("Home Page"):("GptSearch")}</button>
          <button
            onClick={HandleSignOut}
            className='font-bold text-white text-xl p-4 bg-blue-500 m-5 rounded-3xl hover:bg-blue-600 cursor-pointer'>
            Sign Out
          </button>
        </div>
      </div>
      {showGPT?(<GptSearch/>)
      :
      (<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
      

    </div>
  )
}

export default Browse;
