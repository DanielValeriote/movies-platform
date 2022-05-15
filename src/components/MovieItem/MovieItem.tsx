import { useNavigate } from 'react-router-dom'
import './MovieItem.scss'

interface Props {
	img: string,
	title: string,
	id: number
}

const MovieItem = ({img, title, id}: Props) => {
	const navigate = useNavigate();

	return (
		<li className="movieItem">
			<img src={img} alt={title} onClick={() => navigate(`/movie/${id}`)} />
		</li>
	)
}

export {MovieItem};