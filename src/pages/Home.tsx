import React from 'react'
import { useEffect, useState } from 'react';
import moviesLists from '../utils/moviesLists';
import MovieRow from '../components/MovieRow/MovieRow';
import {IMovie, MovieList} from '../../types';

type Props = {}

const Home = (props: Props) => {
	const [allMoviesList, setAllMoviesList] = useState<any[]>([])

	useEffect(() => {
		moviesLists.getPageList().then((res: any) => setAllMoviesList(res))
	}, [])

	return (
		<div className="App">
			{
				allMoviesList.length > 0 &&
				allMoviesList.map((movieList: MovieList): JSX.Element => {
					return <MovieRow key={movieList.name} title={movieList.title} list={movieList.list.results} />
				})
			}
		</div>
	);
}

export default Home