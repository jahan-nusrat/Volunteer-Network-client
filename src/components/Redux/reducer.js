const { USER_REGISTER, LOGIN_USER } = require('./actions');

const initialState = {
	events   : [],
	userInfo : {}
};

const reducer = (state = initialState, action) => {
	console.log(state);
	console.log(action);
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
		default:
			return state;
	}
};

export default reducer;
