import axios from 'axios';

const __BASE_URL__ = 'https://mudgame.herokuapp.com/api';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const LOGGING_IN_USER = 'LOGGING_IN_USER';
export const LOGGING_IN_USER_SUCCESS = 'LOGGING_IN_USER_SUCCESS';
export const LOGGING_IN_USER_FAILURE = 'LOGGING_IN_USER_FAILURE';

export const FETCHING_ROOMS = 'FETCHING_ROOMS';
export const FETCHING_ROOMS_SUCCESS = 'FETCHING_ROOMS_SUCCESS';
export const FETCHING_ROOMS_FAILURE = 'FETCHING_ROOMS_FAILURE';

export const LOGOUT = 'LOGOUT';

export const INITIALIZING = 'INITIALIZING';
export const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';
export const INITIALIZING_FAILURE = 'INITIALIZING_FAILURE';

export const registerUser = props => {
  const newUser = {
    username: props.username,
    email: props.email,
    password1: props.password1,
    password2: props.password2,
  };
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

export const logInUser = props => {
  const existingUser = { username: props.username, password: props.password };
  return function(dispatch) {
    dispatch({ type: LOGGING_IN_USER });
    axios
      .post(`${__BASE_URL__}/login/`, existingUser)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.key);
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

export const logOut = () => {
  return { type: LOGOUT };
};

export const initialize = token => {
  console.log(token);
  return function(dispatch) {
    dispatch({ type: INITIALIZING });
    axios
      .get(`${__BASE_URL__}/adv/init`, { headers: { Authorization: token } })
      .then(res => {
        dispatch({
          type: INITIALIZING_SUCCESS,
          payload: {
            data: res.data,
          },
        });
        console.log(res.data);
      })
      .catch(error => {
        dispatch({ type: INITIALIZING_FAILURE, payload: error.message });
      });
  };
};

export const fetchingRooms = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_ROOMS });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { 'Authorization' : `Token ${token}` } } : null;

    return axios
      .get(`${__BASE_URL__}/adv/fetch_rooms`)
      .then(res => {
        dispatch({
          type: FETCHING_ROOMS_SUCCESS,
          payload: {
            data: res.data,
          },
        });
        // console.log(res.data);
      })
      .catch(error => {
        dispatch({ type: FETCHING_ROOMS_FAILURE, payload: error.message });
      });
  };
};

// https://lambda-mud-test.herokuapp.com/api/adv/fetch_rooms/
