import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchSingleMovie } from '../utils/fetchSingleMovie'

interface Props {

}

type Gender = {
	id: number,
	name: string
}

interface MovieData {
	backdrop_path: string
	title: string
	overview: string
	genres: Gender[]
	vote_average: number
	vote_count: number
}

const MoviePage = ({}: Props) => {
	const imgWidth = 780;
	const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

	const params = useParams();
	const [movieData, setMovieData] = useState<MovieData>()

	useEffect(() => {
		if(params.id) {
			fetchSingleMovie(params.id)
				.then(res => {
					if(res.success === false) {
						throw new Error('tome')
					}
					setMovieData(res)
				})
				.catch(err => console.error(err))
		}
	}, [])



	return (
		
		<div>
			{
				movieData && (
					<main>
						{
							movieData.backdrop_path && 
							<img className='movieImage' src={`${imageBaseUrl}/${movieData.backdrop_path}`} alt='' />
						}
						{
							movieData.title && <h1 className='movieTitle'>{movieData.title}</h1>
						}
						{
							movieData.overview && <p className='movieOverview'>{movieData.overview}</p >
						}
						{
							movieData.vote_average && movieData.vote_count && <h5 className='movieScore'>{movieData.vote_average} ({movieData.vote_count})</h5>
						}
					</main>
				)
	
			}
		</div>
	)
}

export default MoviePage