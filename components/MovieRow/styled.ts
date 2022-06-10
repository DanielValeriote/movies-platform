import styled from "styled-components";

type MArrowProps = {direction: "right" | "left"};

export const RowContainer = styled.div`
	margin-bottom: 75px;
	user-select: none;
`;

export const MoviesList = styled.ul`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	transition: all ease-in-out .2s;
	margin-left: 0px;
`;

export const RowTitle = styled.h1`
	font-size: 1.3rem;
	text-transform: uppercase;
	text-shadow: 0px 0px 3px rgba(0,0,0,0.2);
	margin-bottom: 25px;
	padding-left: 30px;
	font-weight: normal;
`;

export const RowMovementArrow = styled.span<MArrowProps>`
	display: block;
	width: 40px;
	height: 100%;
	position: absolute;
	${(props) => {
		if (props.direction === "right") return "right: 0;"
		return "left: 0;"
	}}
	top: 0;
	background-color: rgba(0,0,0,0.3);
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition-duration: .2s;
	color: white;
	&:hover {
		cursor: pointer;
		background-color: rgba(0,0,0,0.6);
		transition-duration: .2s;
	}

	@media screen and (max-width: 650px) {
		& {
			opacity: 1;
		}
	}
`;

export const MoviesListArea = styled.div`
	position: relative;
	overflow-x: hidden;
	padding-left: 30px;
	&:hover ${RowMovementArrow} {
		opacity: 1;
	}
`;