export const PRODUCT_TYPE = {
    GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
    GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
    GET_ALL_PRODUCTS_FAIL: "GET_ALL_PRODUCTS_FAIL",
  };
  
  export const PRODUCT_ACTION = {
    getAllProducts: () => {
      return {
        type: PRODUCT_TYPE.GET_ALL_PRODUCTS,
      };
    },
    getAllProductsSuccess: (data) => {
      return {
        type: PRODUCT_TYPE.GET_ALL_PRODUCTS_SUCCESS,
        data: data,
      };
    },
    getAllProductsFail: (err) => {
      return {
        type: PRODUCT_TYPE.GET_ALL_PRODUCTS_FAIL,
        data: err,
      };
    },
  };
  