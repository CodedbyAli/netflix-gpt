import Header from "./components/Header"
import useNowPlayingMovies from "./hooks/useMovies"
import MainContainer from './components/MainContainer'
import SecondaryContainer from './components/SecondaryContainer'
import { useSelector } from "react-redux"
import GptSearch from "./components/GptSearch"

const Browse = () => {

  useNowPlayingMovies();
  const isGptClicked = useSelector((store) => store.gpt.searchButton);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </div>
      {
        isGptClicked ? (<GptSearch/>) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </>
  )
}

export default Browse