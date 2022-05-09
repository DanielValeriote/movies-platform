import {IMoviesList} from '../utils/moviesLists';
import "./MovieRow.scss";

const imgWidth = 200;
const imageBaseUrl = `https://image.tmdb.org/t/p/w${imgWidth}`;

interface Props {
	name: string,
	title: string,
	list: any[]
}

const MovieRow: React.FC<Props> = ({name, title, list}) => {
	return <div>
		<h1>{title}</h1>
		<ul className='moviesList'>
		{
			list.map((movie): any => {
				return <li key={movie.id} className="movieItem">
					<img src={`${imageBaseUrl}${movie.poster_path}`} />
				</li>
			})
		}
		</ul>
	</div>
}

export default MovieRow