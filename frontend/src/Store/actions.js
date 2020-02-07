import axiosApi from "../axiosApi";

export const ORDER_PASSWORD_ENCODE_SUCCESS = 'ORDER_PASSWORD_ENCODE_SUCCESS';
export const ORDER_PASSWORD_DECODE_SUCCESS = 'ORDER_PASSWORD_DECODE_SUCCESS';

export const ORDER_PASSWORD_ERROR = 'ORDER_PASSWORD_ERROR';

export const getPasswordEncode = (password) => ({type: ORDER_PASSWORD_ENCODE_SUCCESS,password });
export const getPasswordDecode = (password) => ({type: ORDER_PASSWORD_DECODE_SUCCESS,password });
export const orderPasswordError = () => ({type: ORDER_PASSWORD_ERROR});



export const postEncode = (password) => {
    return async (dispatch)=>{
        try{
           const res =  await axiosApi.post('/encode', password);
            dispatch(getPasswordEncode(res.data))
        }catch (e) {
            dispatch(orderPasswordError())
        }
    }
};

export const postDecode = (password) => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.post('/decode', password);
            dispatch(getPasswordDecode(res.data))
        }catch (e) {
            dispatch(orderPasswordError())
        }
    }
};