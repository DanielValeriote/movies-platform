import styled from "styled-components";
import Image from "next/image";

export const MovieResult = styled.li`
	display: flex;
	flex-direction: column;
	max-width: 188px;
`;

export const MovieTitle = styled.h4`
	font-weight: normal;
	text-align: center;
	margin-top: 8px;
`;

export const ImageContainer = styled.div`
	background-color: #131313;
	border-radius: 3px;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
`;

export const StyledImage = styled(Image)`
	border-radius: 3px;
`;