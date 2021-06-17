import { connect } from "react-redux";
import Home from "../../Pages/Home";
import { CART_ACTION, PRODUCT_ACTION, TODO_ACTION } from "../Action";

const mapStateToProps = (state) => {
  return {
    todoReducer: state.todoReducer,
    productReducer: state.productReducer
  };
};

const mapDispatchToProps = {
  getTodo: TODO_ACTION.getTodo,
  getProducts: PRODUCT_ACTION.getAllProducts,
  addProduct:  CART_ACTION.addProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
