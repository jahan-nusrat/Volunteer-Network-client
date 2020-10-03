import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormContainer, MainDiv } from './Register.style';
import logo from '../../../Images/logo.png';
import fakeData from '../../../data';

const Register = () => {
	const { id } = useParams();
	const slug = parseInt(id);
	const filterId = fakeData.find((info) => info.id === slug);
	console.log(filterId);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<MainDiv>
			<FormContainer className="container">
				<div className="row justify-content-center">
					<div className="col-md-5">
						<form onSubmit={handleSubmit}>
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
							<div className="form-box">
								<h3>Register as a volunteer</h3>
								<div className="form-group">
									<input type="text" name="name" className="form-control" placeholder="Full Name" />
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="form-control"
										placeholder="Username or Email"
									/>
								</div>
								<p id="emailError">{''}</p>
								<div className="form-group">
									<input type="date" name="date" className="form-control" placeholder="Date" />
								</div>
								<p id="passError">{''}</p>
								<div className="form-group">
									<input
										type="text"
										name="description"
										className="form-control"
										placeholder="Description"
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="volunteer"
										className="form-control"
										value={filterId.title}
									/>
								</div>
								<p id="confirmError">{''}</p>
								<button type="submit" className="btn btn-submit">
									Registration
								</button>
								{/* <ToastContainer
								position="top-center"
								autoClose={2000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/> */}
							</div>
						</form>
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default Register;
