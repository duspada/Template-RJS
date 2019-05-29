export const Types = {
  AUTH_REQUEST: 'auth/AUTH_REQUEST',
  AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
  AUTH_FAILURE: 'auth/AUTH_FAILURE',
};

const initialState = {
  email: '',
  password: '',
  token: '',
  loading: false,
  error: false,
  errorMessage: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        token: '',
        loading: true,
        error: false,
        errorMessage: '',
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        loading: false,
        error: false,
        errorMessage: '',
        token: action.payload.token,
      };
    case Types.AUTH_FAILURE:
      return {
        ...state,
        email: '',
        password: '',
        token: '',
        loading: false,
        error: true,
        errorMessage: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  getAuthRequest: (email, password) => ({
    type: Types.AUTH_REQUEST,
    payload: { email, password },
  }),
  getAuthSuccess: token => ({
    type: Types.AUTH_SUCCESS,
    payload: { token },
  }),
  getAuthFailure: error => ({
    type: Types.AUTH_FAILURE,
    payload: { error },
  }),
};
