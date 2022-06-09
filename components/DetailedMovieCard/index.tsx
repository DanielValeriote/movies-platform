import { DetailedMovieData } from '../../types';
import { DetailedMovie, MovieTitle, MovieImage, GenresList, GenreItem, MovieVotes } from './styled';

type Props = {movieData: DetailedMovieData};

const imgWidth = 780;
const imageBaseUrl = `https:/image.tmdb.org/t/p/w${imgWidth}`;

const DetailedMovieCard = ({ movieData }: Props) => {
	const {title, overview, backdrop_path, genres, vote_average, vote_count, original_title } = movieData
	return (
		<DetailedMovie>
			<MovieImage src={`${imageBaseUrl}${backdrop_path}`} alt={title || original_title} />
			<MovieTitle>{title || original_title}</MovieTitle>
			{overview && <p>{overview}</p>}
			<GenresList>
				{
					genres.map(g => <GenreItem key={g.id}>{g.name}</GenreItem>)
				}
			</GenresList>
			<MovieVotes>
				<div style={{color: vote_average > 6.5 ? 'green' : vote_average < 5 ? 'red' : 'yellow', fontWeight: 'bold'}}>
					{vote_average}
				</div>
				<div>
					({vote_count} votos)
				</div>
			</MovieVotes>
		</DetailedMovie>
	)
}

export default DetailedMovieCard