import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-items: center;
	width: 100%;
	height: 50px;
	position: relative;
`;

export const InputWrapper = styled.div`
	max-width: 250px;
	width: 100%;
	margin: auto;
	position: relative;
`;

export const Input = styled.input`
	padding: 10px;
	padding-left: 20px;
	border: 2px solid ${props => props.theme.colors.mainBlue};
	background-color: ${props => props.theme.colors.mainBlack};
	box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
	outline: 0;
	font-size: 1rem;
	width: 100%;
	border-radius: 30px;
	margin: auto;
	color: ${props => props.theme.colors.mainWhite};
`;

export const SearchButton = styled.button`
	background-color: ${props => props.theme.colors.mainBlue};
	position: absolute;
	right: 0;
	top: 0;
	border: 0;
	outline: 0;
	height: 100%;
	border-radius: 0px 30px 30px 0px;
	cursor: pointer;
	width: 23px;
`;