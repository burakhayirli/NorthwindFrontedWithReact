//tüm stateleri toplandığımız yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootRedecur= combineReducers ({
    cart: cartReducer
})

export default rootRedecur;