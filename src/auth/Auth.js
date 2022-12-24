// dispatch({
//   type: 'signin',
//   data
// })

const authReducer = (state, action) => {
  // if (action.type === 'signin') {
  // do signin logic
  //}

  switch (action.type) {
    case 'signin': {
      return {
        ...state,
        isAuthenticated: true,
        user: action.data,
      }
    }
    case 'signout': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    }
    default: {
      return state;
    }
  }

    // isAuthenticated: false,
    // signin(callback) {
    //   Auth.isAuthenticated = true;
    //   setTimeout(callback, 100); //fake async.
    // },
    // signout(callback) {
    //   Auth.isAuthenticated = false;
    //   setTimeout(callback, 100);
    // },
  };
  
  export default authReducer;