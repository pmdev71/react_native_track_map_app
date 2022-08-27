import createDataContext from './createDataContext';
import baseApi from '../api/baseApi';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};

// signup user and get token and store in state
const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await baseApi.post('/signup', {email, password});
      console.log(response.data);
      dispatch({type: 'signup', payload: response.data.token});
      return response.data.token;
    } catch (err) {
      dispatch({type: 'add_error', payload: err.message});
      console.log(err.message);
    }
  };
};

// const signup = dispatch => {
//   return async (email, password) => {
//     try {
//       const response = await fetch(
//         'https://a1e4-103-35-168-194.in.ngrok.io/signup',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         },
//       );
//       const responseJSON = await response.json();
//       console.log(responseJSON.data);
//       //   dispatch({type: 'signup', payload: responseJSON.token});
//       //   return responseJSON.token;
//     } catch (err) {
//       console.log(err.message);
//       //dispatch({type: 'add_error', payload: err.message});
//     }
//   };
// };

// signin user and get token and store in state

const signin = dispatch => {
  return async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseJSON = await response.json();
      dispatch({type: 'signup', payload: responseJSON.token});
      return responseJSON.token;
    } catch (err) {
      dispatch({type: 'add_error', payload: err.message});
    }
  };
};

const signout = dispatch => {
  return async () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout},
  {isSignedIn: false},
);
