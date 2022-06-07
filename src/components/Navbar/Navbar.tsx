import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchInput } from '../';
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
					Início
				</NavLink>
			</li>
		</ul>
		<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} handleChange={handleChange} />
	</nav>
}

export default Navbar