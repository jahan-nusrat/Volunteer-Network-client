import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="container" style={{ height: '100vh', textAlign: 'center' }}>
			<div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
				<div className="col-lg-5">
					<h1>404!!</h1>
					<h2>NOT FOUND</h2>
					<Link to="/">
						<button className="btn btn-info mt-3 px-4">BACK TO HOME</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
