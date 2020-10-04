import React from 'react';
import { LoginComponent } from './Login.style';
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
	return (
		<LoginComponent>
			<div className="container text-center">
				<Link to="/">
					<img className="img-fluid login-logo" src={logo} alt="logo" />
				</Link>

				<div className="row align-items-center">
					<div className="col-lg-5 login">
						<div className="login-content">
							<h3>Login With</h3>
							<button className="btn">
								<FaGoogle className="icon" />
								Continue with Google
							</button>
						</div>
					</div>
				</div>
			</div>
		</LoginComponent>
	);
};

export default Login;
