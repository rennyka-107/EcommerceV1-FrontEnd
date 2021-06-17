import produce from "immer";
import { PRODUCT_TYPE } from "../Action";

const initialState = {
  products: [],
  errors: null,
};

export const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PRODUCT_TYPE.GET_ALL_PRODUCTS_SUCCESS:
        draft.products = action.data.products;
        break;
      case PRODUCT_TYPE.GET_ALL_PRODUCTS:
        draft.products = [];
        draft.errors = action.data
        break;
      default:
        break;
    }
  });
