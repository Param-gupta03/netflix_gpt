import React, { useEffect, useState } from 'react';
import { OPTIONS } from '../utils/constants';

const MovieVideos = ({ movieId }) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        OPTIONS
      );
      const json = await response.json();
      setData(json.results); 
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === null) return null;
  if (data.length === 0)
    return <div className="text-white p-4">No videos available</div>;

  return (
    <div className="text-white flex flex-col px-6 md:px-12 space-y-10">
      {data.map((video) => (
        <div
          key={video.id}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-gray-700 pb-8"
        >
          <iframe
            className="w-full md:w-1/2 aspect-video rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{video.name}</h3>
            <p className="text-sm text-gray-400">Type: {video.type} | Site: {video.site}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieVideos;
