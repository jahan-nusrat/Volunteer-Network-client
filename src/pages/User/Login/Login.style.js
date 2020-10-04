import styled from 'styled-components';

export const LoginComponent = styled.div`
	font-family: 'Poppins', sans-serif;
	position: relative;
	.row {
		height: 90vh;
	}
	.login-logo {
		width: 200px;
	}
	.login {
		border: 1px solid #ccc;
		margin: auto;
		position: relative;
		height: 450px;
		.login-content {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			transform: translate(-50%, -50%);
			h3 {
				font-weight: 600;
			}
			button {
				border: 1px solid #c7c7c7;
				width: 80%;
				border-radius: 30px;
				padding: 0.7rem 0;
				margin-top: 0.8rem;
				position: relative;
				.icon {
					position: absolute;
					left: 5px;
					top: 7px;
					font-size: 2rem;
					color: #ea4335;
				}
			}
		}
	}
`;
