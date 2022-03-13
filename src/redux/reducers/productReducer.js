import { ActionTypes } from "../constants/actionTypes";
const initalState={
    products:[]
}
export const productReducer=(state={initalState},{type,payload})=>{
    switch(type)
    {
        case ActionTypes.SET_PRODUCTS:
             

            return {...state,products:payload}
        default:
            return state
    }
}
export const selectedproductReducer=(state={},{type,payload})=>{
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,product:payload}
        default:
            return state
    }
}