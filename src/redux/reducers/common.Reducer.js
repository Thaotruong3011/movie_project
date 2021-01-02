const initialState = {
  isLoading: false,
  message: "",
  messageLogin: "",
  linkRedirect: null,
  validateForm: false,
};
const commonReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "START_LOADING": {
      return { ...state, isLoading: true };
    }
    case "STOP_LOADING": {
      return { ...state, isLoading: false };
    }
    case "MESSENGER_LOGIN": {
      return { ...state, messageLogin: payload };
    }
    case "EDIT_MESSAGE": {
      return { ...state, message: payload };
    }
    case "REDIRECT": {
      return { ...state, linkRedirect: payload };
    }
    case "SET_VALIDATE": {
      const validate = !state.validateForm;
      return { ...state, validateForm: validate };
    }
    default:
      return state;
  }
};
export default commonReducer;
