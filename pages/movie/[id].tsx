import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { DetailedMovieData } from '../../types';
import { fetchSingleMovie } from '../../utils/fetchSingleMovie';
import { DetailedMovieCard } from '../../components';
import styled from 'styled-components';

type uncertainMovie = DetailedMovieData | undefined;

interface Props { movie: uncertainMovie };

export const getStaticPaths: GetStaticPaths = async () => (
	{
		paths: [{ params: {id: '499932'} }],
		fallback: true
	}
)

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id
	let movie: uncertainMovie = undefined
	if(id && typeof(id) === "string") movie = await fetchSingleMovie(id);

	return {
		props: {
			movie
		}
	}
}

export const Container = styled.div`
	width: 80%;
	margin: 20px auto;

	@media screen and (max-width: 530px) {
		& {
			width: 100%;
		}
	}
`;

const Movie = ({movie}: Props) => {
	return <>
		<Head>
			<title>{movie?.title || "Filme não encontrado"}</title>
			<meta name="description" content={`Detalhes do filme${" '" + movie?.title + "'" || "."}`}/>
		</Head>
		<Container>
			{ movie && <DetailedMovieCard movieData={movie} /> }
		</Container>
	</>
}

export default Movie;