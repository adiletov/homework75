import {ORDER_PASSWORD_DECODE_SUCCESS, ORDER_PASSWORD_ENCODE_SUCCESS} from "./actions";

const initialState = {
    encode: '',
    decode: '',
};

const reducer = (state = initialState, action) =>{
  switch (action.type) {
      case ORDER_PASSWORD_ENCODE_SUCCESS:
          return {...state, encode: action.password , decode: ''};
      case ORDER_PASSWORD_DECODE_SUCCESS:
          return {...state, decode: action.password, encode: ''};
      default:
          return state
  }
};

export default reducer;