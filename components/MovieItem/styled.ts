import styled from "styled-components";
import Image from "next/image";

export const MovieCard = styled.li`
	position: relative;
	transform: scale(.9);
	display: flex;
	flex-direction: column;
	&:hover {
		transition: ease .2s;
		transform: scale(.99);
		cursor: pointer;
	}
	& img {
		width: 200px;
		height: 100%;
	}
`;

export const ImageContainer = styled.div`
	background-color: ${props => props.theme.colors.imagePlaceholder};
	border-radius: 3px;
`;

export const StyledImage = styled(Image)`
	border-radius: 3px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, .25);
`;