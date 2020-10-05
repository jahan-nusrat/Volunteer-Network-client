import React from 'react';
import loading from '../../Images/load.gif';

const Loading = (props) => {
	return (
		<div className="container text-center" style={props.styles}>
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<img src={loading} alt="load" className="img-fluid" />
					<div className="title">
						<h2>Loading...</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
