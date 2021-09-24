import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import appointmentReducer from "./appointmentReducer";
// import checkOutReducer from "./checkOutReducer";
import userReducer from "./userReducer";

export default combineReducers({
  cartStore: cartReducer,
  appointmentStore: appointmentReducer,
  userStore: userReducer,
});
