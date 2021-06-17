import { all, call, spawn } from "redux-saga/effects";
import { authSaga } from "./auth.saga";
import { todoSaga } from "./todo.saga";
import { productSaga } from "./product.saga";
import { cartSaga } from "./cart.saga";

export default function* rootSaga() {
  const sagas = [authSaga, todoSaga, productSaga, cartSaga];
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
