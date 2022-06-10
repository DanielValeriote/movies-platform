import { useState } from 'react';
import { MovieItem } from '..';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { IMovie } from '../../types';
import { RowContainer, MoviesList, MoviesListArea, RowTitle, RowMovementArrow } from './styled';

const imgWidth = 185;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

interface Props {
	title: string,
	list: IMovie[]
};

const MovieRow = ({title, list}: Props) => {
	const fullListWidth = list.length * imgWidth;
	const [hScrollPosition, setHScrollPosition] = useState<number>(0);

	const arrowLeftAction = () => {
		if (hScrollPosition + Math.round(window.innerWidth / 2) >= 0) setHScrollPosition(0)
		else setHScrollPosition((currPosition => currPosition + Math.round(window.innerWidth / 2)));
	}

	const arrowRightAction = () => {
		if((window.innerWidth - fullListWidth) > hScrollPosition - Math.round(window.innerWidth / 2)) {
			setHScrollPosition((window.innerWidth - fullListWidth) + 350);
		}
		setHScrollPosition((currPosition => currPosition - imgWidth * 2));
	}

	return <RowContainer>
		<RowTitle>{title}</RowTitle>
		<MoviesListArea>
			<RowMovementArrow direction='left' style={{display: hScrollPosition === 0 ? 'none' : 'flex'}} onClick={() => arrowLeftAction()}>
				<MdOutlineArrowBackIos size={25} opacity={.8} />
			</RowMovementArrow>
			<RowMovementArrow direction='right' onClick={() => arrowRightAction()}>
				<MdOutlineArrowForwardIos size={25} opacity={.8} />
			</RowMovementArrow>
			<MoviesList style={{
				marginLeft: hScrollPosition+'px',
				width: fullListWidth,
				right: "0"
			}}>
			{
					list.map((movie: IMovie) => {
					if(
						movie && typeof (movie) === 'object' &&
						movie.hasOwnProperty('title') &&
						movie.hasOwnProperty('poster_path') &&
						movie.hasOwnProperty('id')		
						) {

						return <MovieItem 
							title={movie.title} 
							img={`${imageBaseUrl}${movie.poster_path}`}
							originalTitle={movie.original_title}
							id={movie.id}
							key={movie.id}
							/>
						}
					}
				)
			}
			</MoviesList>
		</MoviesListArea>
	</RowContainer>
};

export default MovieRow;