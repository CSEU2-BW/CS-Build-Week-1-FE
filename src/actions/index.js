import axios from 'axios';

const __BASE_URL__ = 'https://lambda-mud-test.herokuapp.com/api'

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const LOGGING_IN_USER = 'LOGGING_IN_USER';
export const LOGGING_IN_USER_SUCCESS = 'LOGGING_IN_USER_SUCCESS';
export const LOGGING_IN_USER_FAILURE = 'LOGGING_IN_USER_FAILURE';

export const registerUser = (props) => {
	const newUser = { username: props.username, email: props.email, password1: props.password1, password2: props.password2 };
	return function(dispatch) {
		dispatch({ type: REGISTERING_USER });
		axios
			.post(`${__BASE_URL__}/registration/`, newUser)
			.then(res => {
				dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.key });
			})
			.catch(error => {
				dispatch({ type: REGISTERING_USER_FAILURE, payload: error.message });
			});
	};
};

export const logInUser = (props) => {
	const existingUser = { username: props.username, password: props.password };
	return function(dispatch) {
		dispatch({ type: LOGGING_IN_USER });
		axios
            .post(`${__BASE_URL__}/login/`, existingUser)
			.then(res => {
				dispatch({
					type: LOGGING_IN_USER_SUCCESS,
					payload: {
						key: res.data.key,
					},
				});
			})
			.catch(error => {
				dispatch({ type: LOGGING_IN_USER_FAILURE, payload: error.message });
			});
	};
};