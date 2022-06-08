import styled from "styled-components";

export const MovieCard = styled.li`
	position: relative;
	transform: scale(.9);
	display: flex;
	flex-direction: column;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, .25);
	&:hover {
		transition: ease .2s;
		transform: scale(.99);
		cursor: pointer;
	}
	& img {
		width: 200px;
		height: 100%;
	}
`