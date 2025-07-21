import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch=useDispatch();
//   // const options = {
//   // method: 'GET',
//   // headers: {
//   //   accept: 'application/json',
//   //   Authorization: `Bearer `+import.meta.env.VITE_TMDB_API_TOKEN,
//   // }
// };

  const getNowPlayingMovies=async()=>{
    
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',OPTIONS);
    const json= await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>
    {
      getNowPlayingMovies();
    },[]);

}

export default useNowPlayingMovies;