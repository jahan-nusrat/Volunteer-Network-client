const { USER_REGISTER } = require('./actions');

const initialState = {
	events : []
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
		default:
			return state;
	}
};

export default reducer;
