import { IMovie } from '../../types';
import { MovieResult, MovieTitle, ImageContainer, StyledImage } from './styled';
import Link from 'next/link';

type Props = {
	movie: IMovie
};

const imgWidth = 185;
const imgHeight = 276;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

const SearchResult = ({movie}: Props) => {
	return <MovieResult>
		<Link href={`/movie/${movie.id}`} passHref>
			<a>
				<ImageContainer style={{ width: imgWidth, height: imgHeight }}>
					<StyledImage width={imgWidth} height={imgHeight} src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
				</ImageContainer>
				<MovieTitle>{movie.title || movie.name}</MovieTitle>
			</a>
		</Link>
	</MovieResult>	
};

export default SearchResult;