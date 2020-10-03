export const USER_REGISTER = 'USER_REGISTER';

export const registerUser = (name, email, date, description, img, title) => {
	return {
		type    : USER_REGISTER,
		payload : { name, email, date, description, img, title }
	};
};
