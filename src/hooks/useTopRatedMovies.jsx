import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
