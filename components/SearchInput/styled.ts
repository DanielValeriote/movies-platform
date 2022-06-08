import styled from "styled-components";

export const InputContainer = styled.div`
	position: relative;
	width: 190px;
	height: 50px;
`;

export const AutoCompleteList = styled.ul`
	display: none;
	z-index: 10;
	background-color: ${props => props.theme.colors.mainWhite};
	color: ${props => props.theme.colors.mainBlue};
	position: absolute;
	border-top: 0;
	top: 100%;
	left: 0px;
	width: 100%;
	border: 2px solid ${props => props.theme.colors.mainBlue};
	border-bottom: 0;
	font-weight: bold;
`;

export const Input = styled.input`
	position: absolute;
	padding: 10px;
	border: 0;
	outline: 0;
	font-size: 1rem;
	height: 100%;
	width: 100%;
	border-radius: 0px;
	border: 2px solid ${props => props.theme.colors.mainBlue};
	border-bottom: 0;
	font-weight: bold;

	&:focus + ${AutoCompleteList}, ${AutoCompleteList}:hover {
		display: block;
		transition: all ease .1s;	
	}
`;

export const SuggestionItem = styled.li`
	padding: 5px;
	border-bottom: 2px solid ${props => props.theme.colors.mainBlue};
	display: grid;
	width: 100%;
	&:hover {
		background-color: ${props => props.theme.colors.mainBlue};
		color: ${props => props.theme.colors.mainWhite};
		transition: all ease .1s;
	}
`;