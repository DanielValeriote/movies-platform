import { useState, useEffect } from 'react';
import { GenericResponse, IMovie } from '../../types.d';
// import { searchByTitle } from '../../utils/searchByTitle';
import { InputContainer, Input, AutoCompleteList, SuggestionItem } from './styled';

type Props = {
	searchValue: string,
	setSearchValue: React.Dispatch<React.SetStateAction<string>>,
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const SearchInput = ({ searchValue, setSearchValue, handleChange}: Props) => {
	const [suggestions, setSuggestions] = useState<IMovie[]>();
	// useEffect(() => {
	// 	if (searchValue.length >= 2) {
	// 		searchByTitle(searchValue)
	// 			.then((res: GenericResponse) => setSuggestions(res.results.slice(0, 6)))
	// 			.catch(err => console.error(err.message))
	// 	} else {
	// 		setSuggestions([]);
	// 	}
	// }, [searchValue])

	return (<InputContainer>
		<Input type="text" value={searchValue} onChange={handleChange} placeholder='Busca' spellCheck={false}/>
		<AutoCompleteList>
			{
				suggestions && suggestions.map((s: IMovie): JSX.Element => {
					return <>
					{
						s.title &&
						<SuggestionItem key={s.id}>
							{/* <Link to={`/movie/${s.id}`} onClick={() => setSearchValue('')}>
								<p>{s.title ? s.title : s.name && s.name}</p>
							</Link> */}
						</SuggestionItem>
						}
					</> 
				})
			}
		</AutoCompleteList>
	</InputContainer>
	);
};

export default SearchInput;