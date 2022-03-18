import { ActionTypes } from "../constants/actionTypes"
export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    };
};
export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
export const initCart=(cart)=>{
    return{
        type:ActionTypes.INIT_CART,
        payload:cart,

    };
};
export const setCart=(product)=>{
    return{
        type:ActionTypes.SET_CART,
        payload:product,
    };
};
export const resetCart=()=>{
    return{
        type:ActionTypes.RESET_CART,
        payload:null,
    };
};