const { USER_REGISTER, LOGIN_USER, SIGNOUT_USER } = require('./actions');

const initialState = {
	events   : [],
	userInfo : {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER:
			let filterEvent = [ ...state.events ].filter((event) => {
				return event.title !== action.payload.title;
			});
			return {
				...state,
				events : [ ...filterEvent, action.payload ]
			};
		case LOGIN_USER:
			return {
				...state,
				userInfo : action.payload
			};
		case SIGNOUT_USER:
			return {
				...state,
				userInfo : {}
			};
		default:
			return state;
	}
};

export default reducer;
