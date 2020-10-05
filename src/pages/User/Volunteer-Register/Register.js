import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FormContainer, MainDiv } from './Register.style';
import logo from '../../../Images/logo.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Register = () => {
	const history = useHistory();
	const loggedInUser = useSelector((state) => state.userInfo);
	const { id } = useParams();
	const [ category, setCategory ] = useState({});
	const [ registerInfo, setRegisterInfo ] = useState({
		description : '',
		date        : new Date()
	});

	useEffect(
		() => {
			fetch(`https://pure-plateau-94061.herokuapp.com/categories/${id}`)
				.then((res) => res.json())
				.then((result) => {
					let { title, img } = result;
					setCategory({ title, img });
				});
		},
		[ id ]
	);

	const handleInput = (e) => {
		setRegisterInfo({
			...registerInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let postRegister = {
			name        : loggedInUser.displayName,
			email       : loggedInUser.email,
			event       : category.title,
			img         : category.img,
			description : registerInfo.description,
			date        : registerInfo.date
		};
		fetch('https://pure-plateau-94061.herokuapp.com/register', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(postRegister)
		}).then((result) => {
			console.log(result);
		});
		history.push('/events');
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
										value={loggedInUser.displayName}
										className="form-control"
										placeholder="Full Name"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										value={loggedInUser.email}
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
									<input type="text" name="title" className="form-control" value={category.title} />
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
