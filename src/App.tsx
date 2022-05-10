import React, { useEffect, useState } from 'react';
// import { MovieItem } from './components/MovieItem/MovieItem';
import moviesLists from './utils/moviesLists';
import MovieRow from './components/MovieRow/MovieRow';
import { Header } from './components/Header/Header';
import './App.scss';

function App() {
  const [allMoviesList, setAllMoviesList] = useState<any[]>([])

  useEffect(() => {
    moviesLists.getPageList().then((res: any) => setAllMoviesList(res))
  }, [])

  return (
    <div className="App">
      <Header />
      {
        allMoviesList.length > 0 &&
        allMoviesList.map((movieList): any => {
          return <MovieRow key={movieList.name} title={movieList.title} list={movieList.list.results} />
        })
      }
    </div>
  );
}

export default App;
