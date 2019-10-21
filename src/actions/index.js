import axios from 'axios';

// const __BASE_URL__ = 'https://lambda-mud-test.herokuapp.com/api'

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const registerUser = (props) => {
    // console.log(props);
	const newUser = { username: props.username, email: props.email, password1: props.password1, password2: props.password2 };
	return function(dispatch) {
		dispatch({ type: REGISTERING_USER });
		// console.log('registering user');
		// console.log(newUser);
		axios
			.post('https://lambda-mud-test.herokuapp.com/api/registration/', newUser)
			.then(res => {
				dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.key });
				// console.log('succces');
				// console.log(res.data.token);
			})
			.catch(error => {
				dispatch({ type: REGISTERING_USER_FAILURE, payload: error.message });
				// console.log('failure');
				// console.log(error.message);
			});
	};
};