import React, { useEffect } from 'react'
import Header from './Header'
import { auth } from '../utils/FireBase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
 
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
    <div>

      <div className='absolute w-full flex justify-between bg-gradient-to-b from-black'>
        <div >
          <Header />
        </div>
        <div>
          <button
            onClick={HandleSignOut}
            className='font-bold text-white text-xl p-4 bg-blue-500 m-5 rounded-3xl hover:bg-blue-600'>
            Sign Out
          </button>
        </div>
      </div>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse;
