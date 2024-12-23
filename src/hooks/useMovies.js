import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
  }

  const getPopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
}

const getTopRatedMovies = async() => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const json = await data.json();
  dispatch(addTopRatedMovies(json.results));
}

  useEffect(()=>{
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
  },[]);

}

export default useMovies;