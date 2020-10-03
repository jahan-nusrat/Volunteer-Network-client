import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormContainer, MainDiv } from './Register.style';
import logo from '../../../Images/logo.png';
import fakeData from '../../../data';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../components/Redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Register = () => {
	const registration = useSelector((state) => state.events);
	const { id } = useParams();
	const slug = parseInt(id);
	const filterId = fakeData.find((info) => info.id === slug);
	console.log(filterId);

	const [ registerInfo, setRegisterInfo ] = useState({
		name        : '',
		email       : '',
		date        : '',
		description : '',
		img         : filterId.img,
		title       : filterId.title
	});

	const dispatch = useDispatch();

	const handleInput = (e) => {
		setRegisterInfo({
			...registerInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			registerUser(
				registerInfo.name,
				registerInfo.email,
				registerInfo.date,
				registerInfo.description,
				filterId.img,
				filterId.title
			)
		);
		toast.success('REGISTERED SUCCESSFULLY');
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
									<input
										type="text"
										name="name"
										onChange={handleInput}
										value={registerInfo.name}
										className="form-control"
										placeholder="Full Name"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										onChange={handleInput}
										value={registerInfo.email}
										className="form-control"
										placeholder="Username or Email"
									/>
								</div>
								<p id="emailError">{''}</p>
								<div className="form-group">
									<input
										type="date"
										name="date"
										onChange={handleInput}
										value={registerInfo.date}
										className="form-control"
										placeholder="Date"
									/>
								</div>
								<p id="passError">{''}</p>
								<div className="form-group">
									<input
										type="text"
										name="description"
										onChange={handleInput}
										value={registerInfo.description}
										className="form-control"
										placeholder="Description"
									/>
								</div>
								<div className="form-group">
									<input type="text" name="title" className="form-control" value={filterId.title} />
								</div>
								<p id="confirmError">{''}</p>
								<button type="submit" className="btn btn-submit">
									Registration
								</button>
								<ToastContainer
									position="bottom-center"
									autoClose={2000}
									hideProgressBar={false}
									newestOnTop={false}
									closeOnClick
									rtl={false}
									pauseOnFocusLoss
									draggable
									pauseOnHover
								/>
							</div>
						</form>
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default Register;
