import * as types from '../actions';

const initialState = {
    registeringUser: false,
    loggingInUser: false,
	key: null,
	error: null,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.REGISTERING_USER:
			return {
				...state,
				registeringUser: true,
			};
		case types.REGISTERING_USER_SUCCESS:
			return {
				...state,
				registeringUser: false,
				key: action.payload,
			};
		case types.REGISTERING_USER_FAILURE:
			return {
				...state,
				registeringUser: false,
				error: action.payload,
            };
        case types.LOGGING_IN_USER:
            return {
                ...state,
                loggingInUser: true,
            };
        case types.LOGGING_IN_USER_SUCCESS:
            return {
                ...state,
                loggingInUser: false,
                key: action.payload.key,
            };
        case types.LOGGING_IN_USER_FAILURE:
            return {
                ...state,
                loggingInUser: false,
                error: action.payload,
            };            
        default:
            return state;
    }
};            