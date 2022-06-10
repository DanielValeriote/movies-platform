import { Form, Input, SearchButton, InputWrapper } from './styled';
import Image from 'next/image';

type Props = {
	searchValue: string,
	setSearchValue: React.Dispatch<React.SetStateAction<string>>,
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const SearchBar = ({ searchValue, handleChange}: Props) => {
	return (<Form action={`/search/${searchValue.trim()}`}>
		<InputWrapper>
			<Input type="text" value={searchValue} onChange={handleChange} placeholder='Busca' spellCheck={false}/>
			<SearchButton>
				<Image src="/assets/search-icon.png" width={15} height={15} alt="Busca"/>
			</SearchButton>
		</InputWrapper>
	</Form>
	);
};

export default SearchBar;