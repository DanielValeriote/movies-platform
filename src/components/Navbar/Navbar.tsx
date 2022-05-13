import { Link } from 'react-router-dom'
import './Navbar.scss'

export const Header = () => {
	return <nav className='page-navbar'>
		<ul className='navbar-list'>
			<li className='navbar-item'>
				<Link to="/">
					Home
				</Link>
			</li>
		</ul>
	</nav>
}