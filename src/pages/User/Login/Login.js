import React from 'react';
import { LoginComponent } from './Login.style';
import logo from '../../../Images/logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import firebaseConfig from '../../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../../../components/Redux/actions';

const Login = () => {
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	//firebase initialize
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const dispatch = useDispatch();
	//google login handle
	var provider = new firebase.auth.GoogleAuthProvider();
	const googleLogin = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				dispatch(loggedInUser(result.user));
				toast.success('Logged In Successfully');
				history.replace(from);
			})
			.catch(function (error) {
				toast.error(error.message);
			});
	};
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
							<button className="btn" onClick={googleLogin}>
								<FaGoogle className="icon" />
								Continue with Google
							</button>
							<ToastContainer
								position="top-center"
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
					</div>
				</div>
			</div>
		</LoginComponent>
	);
};

export default Login;
