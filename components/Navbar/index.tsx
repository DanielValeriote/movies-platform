import { useState } from 'react';
import { SearchBar } from '../';
import { Nav, NavbarList, NavbarItem } from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
	
	const router = useRouter();

	return <Nav>
		<NavbarList>
			<NavbarItem>
				<Link href="/" passHref={true}>
					<a className={router.pathname == "/" ? "active" : ""}>Início</a>
				</Link>
			</NavbarItem>
		</NavbarList>
		<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleChange={handleChange} />
	</Nav>
}

export default Navbar;