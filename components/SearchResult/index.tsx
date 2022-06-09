import { IMovie } from '../../types';
import { MovieResult, MovieTitle } from './styled';
import Image from 'next/image';

type Props = {
	movie: IMovie
};

const imgWidth = 300;
const imageBaseUrl = `https:/image.tmdb.org/t/p/w${imgWidth}`;

const SearchResult = ({movie}: Props) => {
	return <MovieResult>
		<Image width={188} height={282} src={`${imageBaseUrl}${movie.poster_path}`}/>
		<MovieTitle>{movie.title || movie.name}</MovieTitle>
	</MovieResult>	
};

export default SearchResult;