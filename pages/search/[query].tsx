import {GetServerSideProps} from 'next';
import searchByTitle from '../../utils/searchByTitle';
import {GenericResponse, IMovie} from '../../types';
import {SearchResult, SearchList} from '../../components';
import styled from 'styled-components';

type Props = {
	results: IMovie[]
}

type UncertainResults = GenericResponse | undefined;

export const MainContainer = styled.main`
	max-width: 80%;
	margin: 25px auto;
	@media screen and (max-width: 500px) {
		& {
			width: 95%;
		}
	}
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.params?.query;
	let response: UncertainResults = undefined;
	if(query && typeof(query) === "string") response = await searchByTitle(query);
	return {
		props: {
			results: response?.results
		}
	}
}

const SearchPage = ({results}: Props) => {
	return (
		<MainContainer>
			<SearchList>
				{results && results.map(r => <SearchResult key={r.id} movie={r}/>)}
			</SearchList>
		</MainContainer>
	)
}

export default SearchPage