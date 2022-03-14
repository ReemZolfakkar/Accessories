import { ActionTypes } from "../constants/actionTypes";
const initalState = {
  products: [],
  cartProducts: [],
  cartNumber: 0,
};
export const productReducer = (state = { initalState }, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedproductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
export const cartReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      let newCount = parseInt(payload.count);
      let found = state.cartProducts.findIndex((item) => {
        if (item.id == payload.id) {
          return item.id == payload.id;
        }
       else newCount += parseInt(item.count);
      });
      if (found == -1 || !state.cartProducts.length) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, payload],
          cartNumber: newCount ,
        };
      } else {
        state.cartProducts[found].count = payload.count;
        return { ...state, cartNumber: newCount};
      }
    default:
      return state;
  }
};
