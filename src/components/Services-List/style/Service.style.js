import styled from 'styled-components';

export const ServiceComponent = styled.div`
	border: 0px solid transparent;
	background-color: transparent;
	.card-body {
		position: relative;
		.card-title {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) !important;
			color: #ffffff;
			width: 100%;
			margin-bottom: 0;
			padding: 1.8rem 0.8rem;
			height: 100px;
			font-size: 20px;
			font-weight: 600;
		}
	}
`;

export const ServiceRow = styled.div`
	margin-top: -8rem;
	background-color: transparent;
`;
