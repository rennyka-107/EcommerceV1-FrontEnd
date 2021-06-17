export const CART_TYPE = {
  ADD_PRODUCT: "ADD_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  DELETE_ALL_PRODUCT: "DELETE_ALL_PRODUCT",
};

export const CART_ACTION = {
  addProduct: (data) => {
    return {
      type: CART_TYPE.ADD_PRODUCT,
      data: data,
    };
  },
  updateProduct: (data) => {
    return {
      type: CART_TYPE.UPDATE_PRODUCT,
      data: data,
    };
  },
  deleteProduct: (data) => {
    return {
      type: CART_TYPE.DELETE_PRODUCT,
      data: data,
    };
  },
  deleteAllProduct: () => {
    return {
      type: CART_TYPE.DELETE_ALL_PRODUCT,
    };
  },
};
