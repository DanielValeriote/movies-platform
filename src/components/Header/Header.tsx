import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = ({}) => {
	return <header className="page-header">
		<Link to="/">
			<h1>Home</h1>
		</Link>
	</header>
}