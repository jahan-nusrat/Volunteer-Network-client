import styled from 'styled-components';

export const EventComponent = styled.div`
	margin: 2rem 0;
	.events {
		padding: 1rem;
		background-color: #f8fafc;
		border-radius: 8px;
		position: relative;
		.event-img {
			width: 170px;
			height: 150px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 8px;
				object-fit: cover;
			}
		}
		.event-content {
			flex: 1;
			margin-left: 0.8rem;
			h4 {
				font-size: 1.2rem;
			}
			p {
				font-weight: bold;
			}
		}
		button {
			position: absolute;
			bottom: 10px;
			right: 10px;
			background-color: #e3e3e3;
		}
	}
`;

export const EventBox = styled.div`font-family: 'Poppins', sans-serif;`;
