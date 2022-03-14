import { combineReducers } from "redux";
import { productReducer ,selectedproductReducer,cartReducer} from "./productReducer";

 const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedproductReducer,
    cartProducts:cartReducer
})

export default reducers
