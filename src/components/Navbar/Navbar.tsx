import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import './Navbar.scss';

const Navbar = () => {
	const [searchValue, setSearchValue] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	return <nav className='page-navbar'>
		<ul className='navbar-list'>
			<li className='navbar-item'>
				<NavLink to="/">
					Home
				</NavLink>
			</li>
		</ul>
		<div className="searchInputContainer">
			<SearchInput searchValue={searchValue} handleChange={handleChange} />
		</div>
	</nav>
}

export default Navbar