export const types = {
    SHOW_ERROR: 'errorCatcher/SHOW_ERROR',
    STORE_ERROR: 'errorCatcher/STORE_ERROR',
    RESET_ERROR_STRUCTURE: 'errorCatcher/RESET_ERROR_STRUCTURE',
    SHOW_LOGIN: 'errorCatcher/SHOW_LOGIN',
  };
  
  const initialState = {
    handlingCode: 0,
    placeWhereError: '',
    myCustomError: null,
  };
  
  const ErrorCatcherReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SHOW_ERROR: {
        return { ...state };
      }
      case types.STORE_ERROR: {
        const { handlingCode, currentPath, myCustomError } = action.payload;
        // Only update error if this is more important than before error
        const lastHandlingCode = state.handlingCode;
        if (lastHandlingCode >= 0 && handlingCode < 0 && handlingCode < lastHandlingCode) {
          const newErrorCode = handlingCode;
          return {
            ...state,
            handlingCode: newErrorCode,
            placeWhereError: currentPath !== '/error' ? currentPath : state.placeWhereError,
            myCustomError,
          };
        }
        return {
          ...state,
          placeWhereError: currentPath !== '/error' ? currentPath : state.placeWhereError,
          myCustomError,
        };
      }
      case types.RESET_ERROR_STRUCTURE: {
        return {
          ...state,
          handlingCode: 0,
          placeWhereError: '',
          myCustomError: null,
        };
      }
      case types.SHOW_LOGIN:
        return state;
      default:
        return state;
    }
  };
  
  export const actions = {
    // Product actions
    showLogin: args => ({ type: types.SHOW_LOGIN, payload: args }),
    /* Depends on handling code we show error */
    showError: args => ({ type: types.SHOW_ERROR, payload: args }),
    /* Once we have decided what 2 do. We store it */
    storeError: args => ({ type: types.STORE_ERROR, payload: args }),
    clearErrorStructure: () => ({ type: types.RESET_ERROR_STRUCTURE }),
  };
  
  export default ErrorCatcherReducer;
  