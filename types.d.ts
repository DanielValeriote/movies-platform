export interface IMovie {
	id: number,
	title: string,
	poster_path: string,
	name?: string,
	original_title: string,
}

export type Results = IMovie[];

export interface MovieList {
	list: {
		results: Results
	},
	title: string,
	name: string
}

export interface Genre  {
	id: number
	name: string
}

export interface DetailedMovieData {
	backdrop_path: string
	title: string
	overview: string
	genres: Genre[]
	vote_average: number
	vote_count: number,
	original_title: string
}

export interface GenericResponse {
	page: number,
	results: IMovie[]
}