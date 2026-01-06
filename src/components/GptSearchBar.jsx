import React, { useRef } from 'react';
import openai from '../utils/openai';
import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenAI } from "@google/genai";
const GptSearchBar = () => {
  const searchText=useRef(null);
  const dispatch=useDispatch();
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_KEY,
  });

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();

    return json.results;
  };


  const handleGptSearchClick=async()=>{
    
    //make call to gpt api to get move result
    const gptQuery="Act as a Movie Recommendarion system and suggest some movies for the query: "+searchText.current.value+". only give me name of 5 moives , coma seperated like the example result given ahead. Example result: Gadar, Sholay, Don, Race, Golmaal"
     const gptResult = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: gptQuery }],
        },
      ],
    });
   
   
   
   
   
    // const gptResult=await openai.chat.completions.create({
    //   messages:[{role:"user",content:gptQuery}],
    //   model: "gpt-4o-mini",
    // });
    
    const gptMovies=gptResult?.candidates[0]?.content?.parts[0]?.text.split(",");
    
    //for each movie we will find TMDB api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

  }
  return (
    <div className="flex justify-center pt-[10%] pb-[5%] px-4">
      <form className="bg-black flex w-full max-w-3xl rounded-full overflow-hidden shadow-lg" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="flex-grow px-6 py-3 text-white bg-transparent placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded-r-full transition-all duration-300"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
