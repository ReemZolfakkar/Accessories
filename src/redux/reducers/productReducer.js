import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";

function postCart(item) {
  axios.post("http://localhost:3001/Cart", item);
}
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
    case ActionTypes.INIT_CART:
      let cartItemsLength = 0;
      payload.forEach((item) => {
        cartItemsLength = cartItemsLength + item.count;
      });
      return { ...state, cartProducts: payload, cartNumber: cartItemsLength };
    case ActionTypes.RESET_CART:
      postCart({ items: [] });
      return { ...state, cartProducts: [], cartNumber: 0 };
    case ActionTypes.SET_CART:
      let newCount = parseInt(payload.count);
      let found = state.cartProducts.findIndex((item) => {
        if (item.itemId == payload.itemId) {
          return item.itemId == payload.itemId;
        } else newCount += parseInt(item.count);
      });
      if (found == -1 || !state.cartProducts.length) {
        postCart({ items: [...state.cartProducts, payload] });
        return {
          ...state,
          cartProducts: [...state.cartProducts, payload],
          cartNumber: newCount,
        };
      } else {
        state.cartProducts[found].count = payload.count;
        postCart({ items: [...state.cartProducts, payload] });
        return { ...state, cartNumber: newCount };
      }
    default:
      return state;
  }
};
