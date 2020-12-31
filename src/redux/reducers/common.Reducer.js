const initialState = {
  isLoading: false,
  message: "",
  messageLogin: "",
  linkRedirect: null,
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
    default:
      return state;
  }
};
export default commonReducer;
