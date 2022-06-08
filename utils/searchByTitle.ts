export const searchByTitle = async (query: string) => {
	const teste = process.env.teste;
	console.log(teste)
	const resolve = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${query}&language=pt-BR`);
	return await resolve.json()
}