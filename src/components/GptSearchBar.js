import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();


    const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

      const json = await data.json();
       return json.results;
    };

    const handleGptSearchClick = async () => {
      const defaultMovies = "De Dhakka, Khashaba, Daredevil, Invincible, Goodbye Berlin";
      let gptResultsData = defaultMovies;  // Change const to let
  
      try {
          console.log(searchText.current.value);
  
          const gptQuery = "Act as a Movie Recommendation System and Suggest Some Movies For the Query: " 
              + searchText.current.value 
              + ". Only give me names of 5 movies where there wil be 2 Marathi, 2 English and 1 German movie, comma separated like the example result given ahead. Example result is: Abc, Def, Lmn, Opq";
  
          const gptResults = await openai.chat.completions.create({
              model: 'gpt-3.5-turbo',
              messages: [{ role: 'user', content: gptQuery }],
          });
  
          gptResultsData = gptResults.choices?.[0]?.message?.content || defaultMovies;
          
      } catch (error) {
          // console.error("Error fetching GPT response:", error);
          gptResultsData = defaultMovies
      }
      const gptMovies = gptResultsData.split(",");

      const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };
  
  

  return (
    <div className='pt-[30%] md:pt-[7%] flex justify-center'>
     <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={searchText} placeholder={lang[langKey].gptPlaceSearchHolder} className='p-4 m-4 col-span-9'/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
     </form>
    </div>
  )
}

export default GptSearchBar;
