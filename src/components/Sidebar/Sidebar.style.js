import styled from 'styled-components';

export const SideMenuComponent = styled.div`
	font-family: 'Poppins', sans-serif;
	z-index: 1;
	height: 100%;
	width: 300px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #f4f7fc;
	overflow-x: hidden;
	img {
		width: 200px;
		display: block;
		margin: auto;
		padding-top: 1rem;
	}
	.sidenav {
		padding-top: 50px;
		.menu-link {
			padding: 6px 8px 6px 26px;
			text-align: left;
			text-decoration: none;
			font-size: 1rem;
			color: #111111;
			display: block;
			margin-bottom: 0.8rem;
			&:focus {
				box-shadow: 0 0 0 0 transparent;
			}
			.icon {
				font-size: 1.2rem;
				margin-right: 0.5rem;
			}
			&:hover {
				color: #207fee;
			}
		}
	}
`;
