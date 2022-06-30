import React from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode
};

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	justify-content: center;
`;

const SearchList = ({children}: Props) => {
	return (
		<List>{children}</List>
	);
};

export default SearchList;