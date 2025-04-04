import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

useMovieTrailer(movieId);
 
// https://www.youtube.com/embed/1aayuOp0AnE?autoplay=1&mute=1&loop=1&playlist=1aayuOp0AnE
  return (
    <div>
<iframe 
  className='w-screen aspect-video'
  src={`https://www.youtube.com/embed/${trailerVideo?.key ?? "1aayuOp0AnE"}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key ?? "1aayuOp0AnE"}`} 
  title="YouTube video player" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
</iframe>
    </div>
  )
}

export default VideoBackground;
