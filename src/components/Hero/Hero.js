import React from 'react';
import { HeroContainer } from './Hero.style';

const Hero = () => {
	const formSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<HeroContainer className="container text-center">
			<div className="row">
				<div className="col-lg-12 hero-box">
					<h1>i grow by helping people in need</h1>
					<form className="row justify-content-center" onSubmit={formSubmit}>
						<div className="form-group col-lg-5">
							<input type="text" className="form-control" placeholder="Search..." />
							<button className="btn btn-primary">Search</button>
						</div>
					</form>
				</div>
			</div>
		</HeroContainer>
	);
};

export default Hero;
