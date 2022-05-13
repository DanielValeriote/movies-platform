import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleMovie } from '../utils/fetchSingleMovie';
import { SpinnerCircular } from 'spinners-react';
import DetailedMovieCard from '../components/DetailedMovieCard/DetailedMovieCard';
import {Genre, MovieData} from '../../types.d'
import './MoviePage.scss';

interface Props {

}

const MoviePage = ({}: Props) => {
	let imgWidth = window.innerWidth < 500 ? 300 : 780;
	const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

	const params = useParams();
	const [movieData, setMovieData] = useState<MovieData>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if(params.id) {
			fetchSingleMovie(params.id)
				.then(res => {
					if(res.success === false) throw new Error('tome');
					setMovieData(res);
				})
		};
	}, []);

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
			isLoading ? <div className='loadingContainer'><SpinnerCircular color='#1b1c1e' /></div> : 
			movieData && <DetailedMovieCard movieData={movieData} />
		}
	</main>
}

export default MoviePage