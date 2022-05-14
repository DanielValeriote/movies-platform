import React from 'react';
import './DetailedMovieCard.scss';
import { DetailedMovieData } from '../../../types.d';

type Props = {
	movieData: DetailedMovieData
}

const imgWidth = 780;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

const DetailedMovieCard = ({ movieData }: Props) => {
	const {title, overview, backdrop_path, genres, vote_average, vote_count } = movieData
	return (
		<div className='detailedMovieCard'>
			<img className='movieImage' src={`${imageBaseUrl}${backdrop_path}`} alt={title} />
			<h2 className='movieTitle'>{title}</h2>
			{overview && <p className='movieOverview'>
				{overview}
			</p>}
			<ul className='genresList'>
				{
					genres.map(g => <li className='genreItem' key={g.id}>{g.name}</li>)
				}
			</ul>
		</div>
	)
	// genres: Genre[]
	// vote_average: number
	// vote_count: number
}

export default DetailedMovieCard