import styled from 'styled-components';

export const FormContainer = styled.div`
	padding: 2rem 0;
	.form-box {
		border: 1px solid #ababab;
		padding: 1.6rem 2rem;
		background-color: #ffffff;
		border-radius: 4px;
		h3 {
			font-size: 1.3rem;
			font-weight: bold;
			margin-bottom: 1.4rem;
		}
	}
	form {
		img {
			width: 200px;
			object-fit: cover;
			margin: auto;
			display: block;
			margin-bottom: 2.5rem;
		}

		.form-control {
			background-color: #ffffff;
			border-bottom: 1px solid #c5c5c5;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			font-size: 0.9rem !important;
			border-radius: 0px;
			height: calc(1.8em + .75rem + 2px);
			color: #000000;
			font-size: 1rem;
			&:focus {
				box-shadow: 0 0 0 transparent;
			}
		}
		.btn-submit {
			color: #ffffff;
			background-color: #3f90fc;
			width: 100%;
			font-size: 0.85rem;
			height: calc(2em + .75rem + 2px);
		}
		a {
			text-decoration: none;
		}
	}
`;

export const MainDiv = styled.div`
	font-family: 'Poppins', sans-serif;
	background-color: #f8fafc;
	position: relative;
	height: 100vh;
	.bg {
		display: block;
		position: absolute;
		bottom: 0;
		width: 100%;
		object-fit: cover;
	}
`;
