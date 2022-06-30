import Link from "next/link";
import { MovieCard, ImageContainer, StyledImage } from "./styled";

interface Props {
	img: string,
	title: string,
	originalTitle: string
	id: number,
}

const MovieItem = ({img, title, id, originalTitle}: Props) => {
	return (
		<MovieCard>
			<Link href={`/movie/${id}`}>
				<ImageContainer style={{width: 200, height: 300}}>
					<StyledImage src={img} alt={title || originalTitle} width={200} height={300} />
				</ImageContainer>
			</Link>
		</MovieCard>
	);
};

export default MovieItem;