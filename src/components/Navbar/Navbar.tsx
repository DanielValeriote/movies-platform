import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
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

export default Navbar