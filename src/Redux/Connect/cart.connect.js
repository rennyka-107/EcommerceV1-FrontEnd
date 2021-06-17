import { connect } from "react-redux";
import ShoppingCart from "../../Pages/ShoppingCart";
import { CART_ACTION } from "../Action";

const mapStateToProps = (state) => {
  return state.cartReducer;
};

export default connect(mapStateToProps, CART_ACTION)(ShoppingCart);
