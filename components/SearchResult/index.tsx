import { IMovie } from '../../types';
import { MovieResult, MovieTitle } from './styled';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	movie: IMovie
};

const imgWidth = 300;
const imageBaseUrl = `https:/image.tmdb.org/t/p/w${imgWidth}`;

const SearchResult = ({movie}: Props) => {
	return <MovieResult>
		<Link href={`/movie/${movie.id}`} passHref>
			<a>
				<Image width={188} height={282} src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
				<MovieTitle>{movie.title || movie.name}</MovieTitle>
			</a>
		</Link>
	</MovieResult>	
};

export default SearchResult;