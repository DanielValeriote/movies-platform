import './SearchInput.scss'

type Props = {
	searchValue: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ searchValue, handleChange}: Props) => {
	return (<>
		<input className="searchInput" type="text" value={searchValue} onChange={handleChange} placeholder='nome do filme'/>
	</>
	)
}

export default SearchInput