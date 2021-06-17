import produce from "immer";
import { findIndex, remove } from "lodash";
import { showToast } from "../../Utils/showToast";
import { CART_TYPE } from "../Action";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CART_TYPE.ADD_PRODUCT:
        let indexAdd = findIndex(
          draft.products,
          (p) => p.id === action.data.id
        );
        if (indexAdd >= 0) {
          const oldProduct = draft.products[indexAdd];
          draft.products[indexAdd] = {
            ...action.data,
            total: oldProduct.total + action.data.total,
          };
        } else draft.products.push(action.data);
        showToast({ title: "Added", description: "Add product successfully!" });
        break;
      case CART_TYPE.UPDATE_PRODUCT:
        let index = findIndex(draft.products, (p) => p.id === action.data.id);
        if (action.data.total === 0) {
          remove(draft.products, (p) => p.id === action.data.id);
        } else draft.products[index] = action.data;
        showToast({
          title: "Updated",
          description: "Update product successfully!",
        });
        break;
      case CART_TYPE.DELETE_PRODUCT:
        remove(draft.products, (p) => p.id === action.data.id);
        showToast({
          title: "Deleted",
          description: "Delete product successfully!",
        });
        break;
      case CART_TYPE.DELETE_ALL_PRODUCT:
        draft.products = [];
        showToast({
          title: "Deleted all",
          description: "Delete all product successfully!",
        });
        break;
      default:
        break;
    }
  });
