import Link from 'next/link';
import Image from 'next/image';
import {MovieCard} from './styled';

interface Props {
	img: string,
	title: string,
	id: number
}

const MovieItem = ({img, title, id}: Props) => {
	return (
		<MovieCard>
			<Link href={`/movie/${id}`}>
				<Image src={img} alt={title} width={200} height={300} />
			</Link>
		</MovieCard>
	)
}

export default MovieItem;