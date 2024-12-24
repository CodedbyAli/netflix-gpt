import { useRef } from "react"
import { openAi } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import MovieList from "./MovieList";

const GptSearch = () => {
    // *GPT Search
    // *Handle Search
    // *Send the Search to Chatgpt API
    // *Search GPT Movies Recommendations in TMDB Database
    // *Save the TMDB into Redux Slice
    // Display Movies
    const dispatch = useDispatch();
    const gptSearchText = useRef(null);
    const {movieNames, movieResults} = useSelector((store) => store.gpt);


    const searchTMDBMovies = async(movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
        const json = await data.json();
        return json.results;
      }

    const handleSearchInput = async() => {

        const gptPrompt = "Act as a Movie Recommendation system and suggest some movies for the query : " +
        gptSearchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openAi.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
            {"role": "user", "content": gptPrompt},
            ],
        });
      
        const gptMovies = gptResults.choices[0].message.content.split(', ');
        const promiseArray = gptMovies.map((movie) => searchTMDBMovies(movie));
        const moviesList = await Promise.all(promiseArray);
        dispatch(addGptMovies({movieNames: gptMovies, movieResults: moviesList}))

    }
  return (
    <>
        <div className="w-full h-screen">
            <img src="netflix-bg.jpg" alt="Netflix background logo" className="fixed w-full h-full object-cover -z-10"/>
            <div className="pt-14">
                <div className="bg-black/90 max-w-[90rem] mx-auto text-white rounded-lg py-4">
                    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-12">
                        <input ref={gptSearchText} className="col-span-11 p-4 ml-2 bg-black mt-4 rounded-bl-sm  text-white border border-zinc-600 bg-opacity-80" placeholder="Ask for Movies Suggestions from GPT" />
                        <button onClick={handleSearchInput} className="col-span-1 text-md bg-[#D9232E] rounded-sm mt-4 mr-2 font-bold">Click to Ask</button>
                    </form>
                    <div className="ml-2">
                    {movieNames && movieNames.map((movieName, index) => (
                        <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GptSearch