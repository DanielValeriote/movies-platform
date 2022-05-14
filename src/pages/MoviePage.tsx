import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleMovie } from '../utils/fetchSingleMovie';
import DetailedMovieCard from '../components/DetailedMovieCard/DetailedMovieCard';
import {DetailedMovieData} from '../../types.d'
import Loading from '../components/Loading';
import './MoviePage.scss';

interface Props {

}

const MoviePage = ({}: Props) => {
	// let imgWidth = window.innerWidth < 500 ? 300 : 780;

	const params = useParams();
	const [movieData, setMovieData] = useState<DetailedMovieData>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if(params.id) {
			fetchSingleMovie(params.id)
				.then(res => {
					if(res.success === false) throw new Error('tome');
					setMovieData(res);
				})
		};
	}, [params.id]);

	useEffect(( ) => {
		if(movieData) {
			const {title, backdrop_path, genres, vote_average, vote_count} = movieData;
			if(title && backdrop_path && genres && vote_average && vote_count) {
				setIsLoading(false)
			} else {
				console.log(movieData)
			}
		}
	}, [movieData]);

	return <main className='container'>
		{
			isLoading ? <Loading /> : movieData && <DetailedMovieCard movieData={movieData} />
		}
	</main>
}

export default MoviePage