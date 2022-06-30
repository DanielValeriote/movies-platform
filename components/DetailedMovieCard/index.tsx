import { DetailedMovieData } from "../../types";
import { DetailedMovie, MovieTitle, StyledImage, GenresList, GenreItem, MovieVotes, ImageContainer } from "./styled";

type Props = {movieData: DetailedMovieData};

const DetailedMovieCard = ({ movieData }: Props) => {
	const {title, overview, backdrop_path, poster_path, genres, vote_average, vote_count, original_title } = movieData;

	const imgWidth = backdrop_path ? 780 : 342;

	const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

	return (
		<DetailedMovie>
			<ImageContainer style={{ maxWidth: imgWidth}}>
				<StyledImage src={`${imageBaseUrl}${backdrop_path || poster_path}`} alt={title || original_title} width={imgWidth} height={backdrop_path ? 439 : 450} />
			</ImageContainer>
			<MovieTitle>{title || original_title}</MovieTitle>
			{overview && <p>{overview}</p>}
			<GenresList>
				{
					genres.map(g => <GenreItem key={g.id}>{g.name}</GenreItem>)
				}
			</GenresList>
			<MovieVotes>
				{vote_average > 0 && 
				<div style={{color: vote_average > 6.5 ? "green" : vote_average < 5 ? "red" : "yellow", fontWeight: "bold"}}>
					{vote_average}
				</div>}
				<div>
					({vote_count} votos)
				</div>
			</MovieVotes>
		</DetailedMovie>
	);
};

export default DetailedMovieCard;