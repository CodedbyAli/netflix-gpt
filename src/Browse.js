import Header from "./components/Header"
import useNowPlayingMovies from "./hooks/useMovies"
import MainContainer from './components/MainContainer'
import SecondaryContainer from './components/SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </div>
        <MainContainer />
        <SecondaryContainer />
    </div>
    </>
  )
}

export default Browse