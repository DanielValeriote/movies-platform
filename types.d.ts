export interface Genre  {
	id: number
	name: string
}

export interface MovieData {
	backdrop_path: string
	title: string
	overview: string
	genres: Genre[]
	vote_average: number
	vote_count: number
}