const searchByTitle = async (query: string) => {
	const resolve = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=pt-BR`);
	return await resolve.json();
}

export default searchByTitle;