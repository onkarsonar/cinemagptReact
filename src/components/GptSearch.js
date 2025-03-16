import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMoviesSuggestions from './GptMoviesSuggestions';
import { BG_IMG_NETFLIX } from '../utils/constants';

const GptSearch = () => {
  return (
  <>
          <div className='fixed -z-10'>
        <img src={BG_IMG_NETFLIX} alt="Background_img" className=''/>
      </div>
        <div className='pt-[35%] md:pt-0'>
     <GptSearchBar/>
     <GptMoviesSuggestions/>
    </div>
    </>
  )
}

export default GptSearch;
