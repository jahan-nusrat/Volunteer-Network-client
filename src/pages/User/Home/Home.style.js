import styled from 'styled-components';

export const MainComponent = styled.main`
	font-family: 'Poppins', sans-serif;
	header {
		position: relative;
		height: 490px;
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0.1;
			z-index: -3;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
`;
