import { call, put, takeLatest } from "redux-saga/effects";
import ProductApi from "../../Service/Api/product.api";
import { PRODUCT_TYPE } from "../Action";

function* getAllProducts(action) {
  try {
    const response = yield call(ProductApi.getAllProducts);
    if (response.data) {
      yield put({
        type: PRODUCT_TYPE.GET_ALL_PRODUCTS_SUCCESS,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({ type: PRODUCT_TYPE.GET_ALL_PRODUCTS_FAIL, data: e });
  }
}

export function* productSaga() {
  yield takeLatest(PRODUCT_TYPE.GET_ALL_PRODUCTS, getAllProducts);
}
