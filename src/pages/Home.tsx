import { useEffect, useState } from 'react';
import { MovieRow, Loading } from '../components/';
import moviesLists from '../utils/moviesLists';
import { MovieList } from '../../types';

const Home = () => {
	const [allMoviesList, setAllMoviesList] = useState<MovieList[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		document.title = 'Início'
		moviesLists.getPageList().then((res: any) => {
			setIsLoading(false)
			setAllMoviesList(res)
		})
	}, [])

	return (
		<div className="App">
			{
				isLoading ? <Loading /> : allMoviesList.length > 0 &&
				allMoviesList.map((movieList: MovieList): JSX.Element => {
					return <MovieRow key={movieList.name} title={movieList.title} list={movieList.list.results} />
				})
			}
		</div>
	);
}

export default Home