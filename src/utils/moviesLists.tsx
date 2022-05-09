const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = process.env.REACT_APP_API_KEY;
const lang = '&language=pt-BR';

export interface IMoviesList {
	name: string,
	title: string,
	list: () => Promise<any>
};

interface AllLists {
	getPageList: () => Promise<IMoviesList[]>
}

const fetchList = async (url: string) => {
	const resolve = await fetch(url);
	return await resolve.json()
}

console.log(API_KEY)

const allLists: AllLists = {
	getPageList: async () => [
		{
			name: 'trending',
			title: 'Em alta',
			list: await fetchList(`${API_BASE}/trending/movie/week?api_key=${API_KEY}${lang}`)
		},
		{
			name: 'action',
			title: 'Ação',
			list: await fetchList(`${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=28${lang}`)
		},
		{
			name: 'adventure',
			title: 'Aventura',
			list: await fetchList(`${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=12${lang}`)
		},
		{
			name: 'documentary',
			title: 'Documentário',
			list: await fetchList(`${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=99${lang}`)
		},
		{
			name: 'family',
			title: 'Para família',
			list: await fetchList(`${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=10751${lang}`)
		},
		{
			name: 'horror',
			title: 'Terror',
			list: await fetchList(`${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=27${lang}`)
		},
	]
}

export default allLists