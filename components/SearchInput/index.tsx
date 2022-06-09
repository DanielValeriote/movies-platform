import { useState, useEffect } from 'react';
import { GenericResponse, IMovie } from '../../types';
import { InputContainer, Input } from './styled';

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
	</InputContainer>
	);
};

export default SearchInput;