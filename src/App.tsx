import React, { useEffect, useState } from 'react';
import MovieItem from './components/MovieItem';
import moviesLists from './utils/moviesLists';
import MovieRow from './components/MovieRow';
import './App.scss';

function App() {

  const [allMoviesList, setAllMoviesList] = useState<any[]>([])

  useEffect(() => {
    moviesLists.getPageList().then((res: any) => setAllMoviesList(res))
  }, [])

  return (
    <div className="App">
      {
        allMoviesList.length > 0 &&
        allMoviesList.map((movieList): any => {
          return <MovieRow title={movieList.title} name={movieList.name} list={movieList.list.results} />
        })
      }
    </div>
  );
}

export default App;
