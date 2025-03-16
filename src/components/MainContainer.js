import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  // Pick a random movie
  const randomIndex = Math.floor(Math.random() * movies.length);
  
  // const mainMovie = movies[0];
  const mainMovie = movies[randomIndex];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className='pt-[10%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
