export const searchByTitle = async (query: string) => {
	const resolve = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=pt-BR`);
	return await resolve.json()
}