export const types = {
  // UI SETTERS
  SET_PREVIOUS_LOCATION: 'myRouter/SET_PREVIOUS_LOCATION',
  RESET_MY_ROUTER: 'myRouter/RESET_MY_ROUTER',
};

export const initialState = {
  previousLocation: '',
  history: [''],
};

const myRouterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PREVIOUS_LOCATION: {
      state.history.push(action.location);
      let previousLocation = '';
      try {
        previousLocation = state.history[state.history.length - 2];
      } catch (err) {
        // console.log(JSON.stringify(state.history));
      }

      return {
        ...state,
        history: state.history.splice(0, 1000),
        previousLocation,
      };
    }
    case types.RESET_MY_ROUTER: {
      return {
        ...initialState,
      };
    }
    default:
      return { ...state };
  }
};

export const actions = {
  setPreviousLocation: location => ({
    type: types.SET_PREVIOUS_LOCATION,
    location,
  }),
  resetMyRouter: () => ({
    type: types.RESET_MY_ROUTER,
  }),
};

export default myRouterReducer;
