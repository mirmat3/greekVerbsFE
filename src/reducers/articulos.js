export const types = {
  GET_ARTICULOS_BEGINS: "articulos/GET_ARTICULOS_BEGINS",
  GET_ARTICULOS_SUCCESS: "articulos/GET_ARTICULOS_SUCCESS",
  GET_ARTICULOS_ERROR: "articulos/GET_ARTICULOS_ERROR",
  GET_ARTICULOS_RESET: "articulos/GET_ARTICULOS_RESET",
};

export const initialState = {
  getArticulosFetching: false,
  getArticulosSuccess: null,
  getArticuloError: null,
};

const articulosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICULOS_BEGINS: {
      return {
        ...state,
        getArticulosFetching: true,
        getArticulosSuccess: null,
        getArticuloError: null,
      };
    }
    case types.GET_ARTICULOS_SUCCESS: {
     
      const articulos = action && action.getArticulos;
      return {
        ...state,
        getArticulosFetching: false,
        getArticulosSuccess: articulos,
        getArticuloError: null,
      };
    }
    case types.GET_ARTICULOS_ERROR: {
      return {
        ...state,
        getArticulosFetching: false,
        getArticulosSuccess: null,
        getArticuloError: action.error,
      };
    }
    case types.GET_ARTICULOS_RESET: {
      return {
        ...state,
        getArticulosFetching: false,
        getArticulosSuccess: null,
        getArticuloError: null,
      };
    }
    default:
      return { ...state };
  }
};

export const actions = {
  getArticulos: () => ({
    type: types.GET_ARTICULOS_BEGINS,
  }),
  successGetArticulos: (getArticulos) => ({
    type: types.GET_ARTICULOS_SUCCESS,
    getArticulos,
  }),
  errorGetArticulos: (error) => ({ type: types.GET_ARTICULOS_ERROR, error }),
};

export default articulosReducer;
