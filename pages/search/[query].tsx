import {GetServerSideProps} from 'next';
import Link from 'next/link';
import searchByTitle from '../../utils/searchByTitle';
import {GenericResponse, IMovie} from '../../types';
import {SearchResult, SearchList} from '../../components';
import styled from 'styled-components';

type Props = {
	results: IMovie[],
	query: string
};

type UncertainResults = GenericResponse | undefined;

export const MainContainer = styled.main`
	max-width: 80%;
	height: 100%;
	margin: 25px auto;
	@media screen and (max-width: 500px) {
		& {	width: 95%;	}
	}
`;

const ResultMessage = styled.h1`
	text-align: center;
	font-weight: normal;
	font-size: 1.4rem;
	margin-bottom: 50px;
`;

const BackToHome = styled.a`
	color: ${props => props.theme.colors.mainBlue};
	display: block;
	text-align: center;
	font-size: 1.2rem;
	font-weight: bold;
	margin-top: 50px;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.params?.query;
	let response: UncertainResults = undefined;
	if(query && typeof(query) === "string") response = await searchByTitle(query);
	return {
		props: {
			results: response?.results,
			query: query
		}
	}
};

const SearchPage = ({results, query}: Props) => {
	return (
		<MainContainer>
			{
				results && results.length > 0 ? (<>
					{query && <ResultMessage>Resultados para &quot;{query.toString()}&quot;</ResultMessage>}
				<SearchList>
					{results.map(r => {
						if (r.poster_path || r.backdrop_path) return <SearchResult key={r.id} movie={r} />
						return
					})}
				</SearchList>
				</>
				) : <>
				<ResultMessage>
					{query ? `Nenhum resultado encontrado para "${query}"` : "Nenhum resultado encontrado"}
				</ResultMessage>
				<Link href={'/'} passHref><BackToHome>Voltar ao início</BackToHome></Link>
				</>
			}
		</MainContainer>
	)
}

export default SearchPage;