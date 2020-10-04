export const USER_REGISTER = 'USER_REGISTER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (name, email, date, description, img, title) => {
	return {
		type    : USER_REGISTER,
		payload : { name, email, date, description, img, title }
	};
};

export const loggedInUser = (info) => {
	return {
		type    : LOGIN_USER,
		payload : info
	};
};
