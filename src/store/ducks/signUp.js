export const Types = {
  SIGNUP_REQUEST: 'signUp/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'signUp/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'signUp/SIGNUP_FAILURE',
};

const initialState = {
  name: '',
  email: '',
  password: '',
  token: '',
  loading: false,
  error: false,
  errorMessage: '',
};

export default function signUp(state = initialState, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        token: '',
        loading: true,
        error: false,
        errorMessage: '',
      };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        password: '',
        loading: false,
        error: false,
        errorMessage: '',
        token: action.payload.token,
      };
    case Types.SIGNUP_FAILURE:
      return {
        ...state,
        name: '',
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
  signUpRequest: (name, email, password) => ({
    type: Types.SIGNUP_REQUEST,
    payload: { name, email, password },
  }),
  signUpSuccess: token => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { token },
  }),
  signUpFailure: error => ({
    type: Types.SIGNUP_FAILURE,
    payload: { error },
  }),
};
