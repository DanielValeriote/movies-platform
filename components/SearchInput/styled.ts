import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	width: 100%;
	height: 50px;
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
	max-width: 250px;
	margin: auto;
	color: ${props => props.theme.colors.mainWhite};
`;