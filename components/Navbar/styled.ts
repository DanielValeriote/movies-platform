import styled from "styled-components"

export const NavbarList = styled.ul`
	display: flex;
	gap: 15px;
	align-items: center;
	height: 100%;
	width: 100%;
	text-transform: uppercase;
	grid-area: navbar-list;
`;

export const Nav = styled.nav`
	padding: 0px 30px;
	height: 80px;
	background-color: ${props => props.theme.colors.mainBlack};
	box-shadow: 0px 0px 10px rgba(0,0,0,.7);
	display: grid;
	grid-template: 'navbar-list searchInputContainer' 100% / 10fr 1fr;
	align-items: center;

@media screen and (max-width: 480px) {
	&	{
		grid-template:
			'navbar-list' 1fr
			'searchInputContainer' 1fr
			/ 1fr;
		height: 180px;
		align-items: center;
		justify-content: center;
		text-align: center;
		& ${NavbarList} {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
`;

export const NavbarItem = styled.li`
	font-weight: normal;
	font-size: 1.7rem;
	color: ${props => props.theme.colors.mainWhite};
	&:hover {
		text-shadow: 0px 0px 3px ${props => props.theme.colors.mainWhite};
		transition: all .2s ease;
	}
	& a {
		opacity: .7;
	}
	& .active {
		opacity: 1;
		color: ${props => props.theme.colors.mainWhite};
	}
`