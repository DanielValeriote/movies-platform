import styled from "styled-components"

export const DetailedMovie = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 15px;
	background-color: ${(props) => props.theme.colors.mainBlack};
	padding: 20px;
	border-radius: 15px;
	color: ${(props) => props.theme.colors.mainWhite};
	text-align: center;
	& p {
		max-width: 550px;
	}
`;

export const MovieTitle = styled.h2`
	font-weight: bold;
	font-size: 2rem;
	width: 100%;
`;

export const MovieImage = styled.img`
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	max-width: 100%;
	border-radius: 5px;
`;

export const GenresList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 25px;
	flex-wrap: wrap;
`;

export const GenreItem = styled.li`
	border-radius: 10px;
	padding: 5px;
	font-weight: bold;
	background-color: ${props => props.theme.colors.mainWhite};
	color: ${props => props.theme.colors.mainBlack};
	opacity: .9;
	box-shadow: 0px 0px 3px rgba($color: ${props => props.theme.colors.mainWhite}, $alpha: .4);
`;

export const MovieVotes = styled.div`
	display: flex;
	font-size: 1.4rem;
	gap: 10px;
`;