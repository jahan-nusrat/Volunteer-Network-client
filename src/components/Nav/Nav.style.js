import styled from 'styled-components';

export const NavStyle = styled.nav`
	padding-top: 1rem;
	font-family: 'Poppins', sans-serif;
	img {
		width: 200px;
	}
	.nav-item {
		margin-left: 0.5rem;

		.nav-link {
			color: #0b0b0b;
		}
	}
	.register {
		background-color: #3f90fc;
		border-radius: 6px;
		padding: 0 0.7rem;
		.nav-link {
			color: #ffffff;
		}
	}
	.admin {
		background-color: #434141;
		border-radius: 6px;
		padding: 0rem 0.7rem;
		.nav-link {
			color: #ffffff;
		}
	}
`;
