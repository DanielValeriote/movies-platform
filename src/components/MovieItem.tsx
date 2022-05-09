interface Props {
	img?: string,
	title: string
}

const MovieItem: React.FC<Props> = ({img, title}) => {
	return (
		<li>
			<img src={img} alt={title} />
		</li>
	)
}

export default MovieItem;