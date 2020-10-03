import styled from 'styled-components';

export const HeroContainer = styled.div`
	font-family: 'Poppins', sans-serif;
	.hero-box {
		margin-top: 5rem;
		h1 {
			text-transform: uppercase;
		}
		form {
			margin-top: 1.5rem;
			.form-group {
				position: relative;
				button {
					position: absolute;
					top: 0;
					right: 15px;
				}
			}
		}
	}
`;
