import styled from 'styled-components';

export const FormContainer = styled.div`
	font-family: 'Poppins', sans-serif;
	.addEvent-title {
		padding-top: 1rem;
		text-transform: uppercase;
	}
	form {
		margin-top: 3rem;
		position: relative;
		label {
			font-weight: 600;
		}
		.banner {
			width: 400px;
		}
		button {
			position: absolute;
			bottom: 2rem;
			right: 3rem;
		}
	}
`;
