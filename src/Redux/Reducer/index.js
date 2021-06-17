import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { authReducer } from "./auth.reducer";
import { todoReducer } from "./todo.reducer";
import { productReducer } from "./product.reducer";
import { cartReducer } from "./cart.reducer";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  todoReducer,
  productReducer,
  cartReducer
});

export default rootReducer;
