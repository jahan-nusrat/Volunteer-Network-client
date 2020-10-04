import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';
import { NavStyle } from './Nav.style';

const NavBar = () => {
	return (
		<NavStyle className="container">
			<div className="row align-items-center">
				<div className="col-lg-3">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid" />
					</Link>
				</div>
				<div className="col-lg">
					<ul className="nav d-flex justify-content-end align-items-center">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/donations" className="nav-link">
								Donations
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/events" className="nav-link">
								Events
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item register">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item admin">
							<Link to="/adminPanel" className="nav-link">
								Admin
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</NavStyle>
	);
};

export default NavBar;
