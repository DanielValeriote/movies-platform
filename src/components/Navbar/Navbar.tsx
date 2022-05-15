import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
	return <nav className='page-navbar'>
		<ul className='navbar-list'>
			<li className='navbar-item'>
				<NavLink to="/">
					Home
				</NavLink>
			</li>
			<li className='navbar-item'>
				<NavLink to="/about">
					About
				</NavLink>
			</li>
		</ul>
	</nav>
}

export default Navbar