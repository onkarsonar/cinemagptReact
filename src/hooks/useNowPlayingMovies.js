import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from 'react-redux';


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);


    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
       
        dispatch(addNowPlayingMovies(json.results));
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => console.error(err));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);

};


export default useNowPlayingMovies;