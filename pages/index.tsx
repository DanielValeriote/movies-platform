import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import moviesLists from "../utils/moviesLists";
import { MovieList } from "../types";
import {MovieRow} from "../components";

export const getStaticProps: GetStaticProps = async () => {
	const allMoviesList = await moviesLists.getPageList();
	return {
		props: { allMoviesList },
		revalidate: 43200 //updates homepage every 12 hours
	};
};

const Home: NextPage = ({ allMoviesList }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<Head>
				<title>Início</title>
				<meta name="description" content="Plataforma para consulta de informações de filmes." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main style={{paddingTop: "30px"}}>
				{
					allMoviesList.map((movieList: MovieList): JSX.Element => {
						return <MovieRow key={movieList.name} title={movieList.title} list={movieList.list.results} />;
					})
				}
			</main>
		</div>
	);
};

export default Home;