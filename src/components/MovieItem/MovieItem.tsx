import './MovieItem.scss'

interface Props {
	img: string,
	title: string
}

const MovieItem: React.FC<Props> = ({img, title}) => {
	return (
		<li className="movieItem">
			<img src={img} alt={title} />
		</li>
	)
}

export {MovieItem};