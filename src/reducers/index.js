import * as types from '../actions';

const initialState = {
  loading: false,
  isLoggedIn: false,
  token: null,
  error: null,
  data: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTERING_USER:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTERING_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.key,
      };
    case types.REGISTERING_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.LOGGING_IN_USER:
      return {
        ...state,
        loading: true,
      };
    case types.LOGGING_IN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.key,
        isLoggedIn: true,
      };
    case types.LOGGING_IN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.LOGOUT:
      return initialState;

    case types.INITIALIZING:
      return {
        ...state,
        loading: true,
      };
    case types.INITIALIZING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.INITIALIZING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.FETCHING_ROOMS:
      return {
        ...state,
        loading: true,
      };
    case types.FETCHING_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.FETCHING_ROOMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
