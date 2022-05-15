import {useState, useEffect} from 'react';
import { GenericResponse, IMovie } from '../../../types.d'
import { searchByTitle } from '../../utils/searchByTitle';
import './SearchInput.scss';

type Props = {
	searchValue: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const SearchInput = ({ searchValue, handleChange}: Props) => {
	const [suggestions, setSuggestions] = useState<GenericResponse>();
	useEffect(() => {
		if (searchValue.length >= 2) {
			searchByTitle(searchValue)
				.then((res) => {
					setSuggestions(res)
					} 
				)
				.catch(err => console.error(err.message))
		}
	}, [searchValue])
	return (<>
		<input className="searchInput" type="text" value={searchValue} onChange={handleChange} placeholder='nome do filme'/>
		<ul className='autoCompleteItems'>
			
		</ul>
	</>
	);
};

export default SearchInput;