export const types = {
  ADD_VERBO_BEGINS: "verbos/ADD_VERBO_BEGINS",
  ADD_VERBO_SUCCESS: "verbos/ADD_VERBO_SUCCESS",
  ADD_VERBO_ERROR: "verbos/ADD_VERBO_ERROR",
  ADD_VERBO_RESET: "verbos/ADD_VERBO_RESET",

  GET_VERBOS_BEGINS: "verbos/GET_VERBOS_BEGINS",
  GET_VERBOS_SUCCESS: "verbos/GET_VERBOS_SUCCESS",
  GET_VERBOS_ERROR: "verbos/GET_VERBOS_ERROR",
  GET_VERBOS_RESET: "verbos/GET_VERBOS_RESET",

  EDIT_VERBO_BEGINS: "verbos/EDIT_VERBO_BEGINS",
  EDIT_VERBO_SUCCESS: "verbos/EDIT_VERBO_SUCCESS",
  EDIT_VERBO_ERROR: "verbos/EDIT_VERBO_ERROR",
  EDIT_VERBO_RESET: "verbos/EDIT_VERBO_RESET",

  GET_ADVERBIOS_BEGINS: "verbos/GET_ADVERBIOS_BEGINS",
  GET_ADVERBIOS_SUCCESS: "verbos/GET_ADVERBIOS_SUCCESS",
  GET_ADVERBIOS_ERROR: "verbos/GET_ADVERBIOS_ERROR",
  GET_ADVERBIOS_RESET: "verbos/GET_ADVERBIOS_RESET",
};

export const initialState = {
  addVerboFetching: false,
  addVerboSuccess: null,
  addVerboError: null,

  getVerbosFetching: false,
  getVerbosSuccess: null,
  getVerbosError: null,
  
  editVerbosFetching: false,
  editVerbosSuccess: null,
  editVerbosError: null,

  getAdverbiosFetching: false,
  getAdverbiosSuccess: null,
  getAdverbiosError: null,
};

const verbosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_VERBO_BEGINS: {
      return {
        ...state,
        addVerboFetching: true,
        addVerboSuccess: null,
        addVerboError: null,
      };
    }
    case types.ADD_VERBO_SUCCESS: {

      return {
        ...state,
        addVerboFetching: false,
        addVerboSuccess: action,
        addVerboError: null,
      };
    }
    case types.ADD_VERBO_ERROR: {
      return {
        ...state,
        addVerboFetching: false,
        addVerboSuccess: null,
        addVerboError: action.error,
      };
    }
    case types.ADD_VERBO_RESET: {
      return {
        ...state,
        addVerboFetching: false,
        addVerboSuccess: null,
        addVerboError: null,
      };
    }
    case types.GET_VERBOS_BEGINS: {
      return {
        ...state,
        getVerbosFetching: true,
        getVerbosSuccess: null,
        getVerbosError: null,
      };
    }
    case types.GET_VERBOS_SUCCESS: {

      return {
        ...state,
        getVerbosFetching: false,
        getVerbosSuccess: action?.verbos,
        getVerbosError: null,
      };
    }
    case types.GET_VERBOS_ERROR: {
      return {
        ...state,
        getVerbosFetching: false,
        getVerbosSuccess: null,
        getVerbosError: action.error,
      };
    }
    case types.GET_VERBOS_RESET: {
      return {
        ...state,
        getVerbosFetching: false,
        getVerbosSuccess: null,
        getVerbosError: null,
      };
    }

    case types.EDIT_VERBO_BEGINS: {
      return {
        ...state,
        editVerboFetching: true,
        editVerboSuccess: null,
        editVerboError: null,
      };
    }
    case types.EDIT_VERBO_SUCCESS: {
      // Aquí asumo que la acción contiene el verbo editado en action.verbo
      return {
        ...state,
        editVerboFetching: false,
        editVerboSuccess: action,
        editVerboError: null,
      };
    }
    case types.EDIT_VERBO_ERROR: {
      return {
        ...state,
        editVerboFetching: false,
        editVerboSuccess: null,
        editVerboError: action.error,
      };
    }
    case types.EDIT_VERBO_RESET: {
      return {
        ...state,
        editVerboFetching: false,
        editVerboSuccess: null,
        editVerboError: null,
      };
    }
    
    case types.GET_ADVERBIOS_BEGINS: {
      return {
        ...state,
        getAdverbiosFetching: true,
        getAdverbiosSuccess: null,
        getAdverbiosError: null,
      };
    }
    case types.GET_ADVERBIOS_SUCCESS: {

      return {
        ...state,
        getAdverbiosFetching: false,
        getAdverbiosSuccess: action?.verbos,
        getAdverbiosError: null,
      };
    }
    case types.GET_ADVERBIOS_ERROR: {
      return {
        ...state,
        getAdverbiosFetching: false,
        getAdverbiosSuccess: null,
        getAdverbiosError: action.error,
      };
    }
    case types.GET_ADVERBIOS_RESET: {
      return {
        ...state,
        getAdverbiosFetching: false,
        getAdverbiosSuccess: null,
        getAdverbiosError: null,
      };
    }
    default:
      return { ...state };
  }
};

export const actions = {
  addVerbo: (verbData) => ({
    type: types.ADD_VERBO_BEGINS,
    verbData
  }),
  successAddVerbo: (verbAdded) => ({
    type: types.ADD_VERBO_SUCCESS,
    verbAdded,
  }),
  errorAddVerbo: (error) => ({ type: types.ADD_VERBO_ERROR, error }),
  resetAddVerbo: () => ({ type: types.ADD_VERBO_RESET }),

  getVerbos: () => ({
    type: types.GET_VERBOS_BEGINS,
  }),
  successGetVerbos: (verbos) => ({
    type: types.GET_VERBOS_SUCCESS,
    verbos,
  }),
  errorGetVerbos: (error) => ({ type: types.GET_VERBOS_ERROR, error }),
  resetGetVerbos: () => ({ type: types.GET_VERBOS_RESET }),

  editVerbo: (verbo) => ({
    type: types.EDIT_VERBO_BEGINS,
    verbo,
  }),
  successEditVerbo: (editSuccess) => ({
    type: types.EDIT_VERBO_SUCCESS,
    editSuccess,
  }),
  errorEditVerbo: (error) => ({
    type: types.EDIT_VERBO_ERROR,
    error,
  }),
  resetEditVerbo: () => ({
    type: types.EDIT_VERBO_RESET,
  }),
  getAdverbios: () => ({
    type: types.GET_ADVERBIOS_BEGINS,
  }),
  successGetAdverbios: (verbos) => ({
    type: types.GET_ADVERBIOS_SUCCESS,
    verbos,
  }),
  errorGetAdverbios: (error) => ({ type: types.GET_ADVERBIOS_ERROR, error }),
  resetGetAdverbios: () => ({ type: types.GET_ADVERBIOS_RESET }),

};

export default verbosReducer;
