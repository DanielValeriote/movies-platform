import { DetailedMovieData } from '../../../types.d';
import './DetailedMovieCard.scss';

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
			<section className="movieVotes">
				<div className="voteAverage" style={{color: vote_average > 6.5 ? 'green' : vote_average < 5 ? 'red' : 'yellow'}}>
					{vote_average}
				</div>
				<div className="voteCount">
					({vote_count} votos)
				</div>
			</section>
		</div>
	)
}

export default DetailedMovieCard