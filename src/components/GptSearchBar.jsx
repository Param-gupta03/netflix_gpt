import React, { useRef } from 'react';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const searchText=useRef(null);
  const handleGptSearchClick=async()=>{
    console.log(searchText.current.value);
    //make call to gpt api to get move result
    const gptQuery="Act as a Movie Recommendarion system and suggest some movies for the query: "+searchText.current.value+". only give me name of 5 moives , coma seperated like the example result given ahead. Example resulr: Gadar, Sholay, Don, Race, Golmaal"
    const gptResult=await openai.chat.completions.create({
      messages:[{role:"user",content:gptQuery}],
      model: "gpt-4o-mini",
    });
    console.log(gptResult.choices);

  }
  return (
    <div className="flex justify-center pt-[20%] px-4">
      <form className="bg-black bg-opacity-80 flex w-full max-w-2xl rounded-full overflow-hidden shadow-lg" onSubmit={(e)=>e.preventDefault()}>
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
