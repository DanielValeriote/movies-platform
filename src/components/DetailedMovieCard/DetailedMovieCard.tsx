import React from 'react';
import './DetailedMovieCard.scss';
import { Genre, MovieData } from '../../../types.d';

type Props = {
	movieData: MovieData
}

const imgWidth = 780;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

const DetailedMovieCard = ({ movieData }: Props) => {
	const {title, overview, backdrop_path, genres, vote_average, vote_count } = movieData
	return (
		<div className='detailedMovieCard'>
			<img className='movieImage' src={`${imageBaseUrl}${backdrop_path}`} alt={title} />
			<h2 className='movieTitle'>{title}</h2>
			{overview && <p>
				{overview}
			</p>}
		</div>
	)
}

export default DetailedMovieCard