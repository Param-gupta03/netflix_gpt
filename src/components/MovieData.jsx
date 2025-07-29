import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OPTIONS } from '../utils/constants';
import Header from './Header';
import MovieVideos from './MovieVideos';

const MovieData = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      OPTIONS
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return null;

  const { original_title, overview, vote_average, poster_path } = data;

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header & Navigation */}
      <div className="relative z-10 flex">
        <Header />
        <div className="px-6 md:px-12 mt-4">
          <button
            onClick={() => navigate('/browse')}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition duration-300"
          >
           Home
          </button>
        </div>
      </div>

      {/* Movie Details Section */}
      <section className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          className="w-[300px] rounded-2xl shadow-2xl"
        />
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{original_title}</h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            {overview}
          </p>
          <p className="text-yellow-400 text-lg font-semibold">
            ⭐ Rating: {vote_average}
          </p>
        </div>
      </section>

      {/* Trailer & Clips Section */}
      <section className="mt-8 border-t border-gray-700 pt-10 px-6 md:px-12 pb-20">
        <h2 className="text-3xl font-bold mb-8">🎬 Clips & Trailers</h2>
        <MovieVideos movieId={movieId} />
      </section>
    </div>
  );
};

export default MovieData;
