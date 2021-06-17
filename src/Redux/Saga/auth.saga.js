import { put, takeEvery } from "redux-saga/effects";
import { AUTH_TYPE } from "../Action";

function* login(action) {
  const { username, password } = action.data;
  try {
    if (username === "admin" && password === "admin") {
      yield put({ type: AUTH_TYPE.LOGIN_SUCCESS, data: action.data });
    } else {
      yield put({
        type: AUTH_TYPE.LOGIN_FAIL,
        data: "Username or password invalid!",
      });
    }
  } catch (e) {
    yield put({ type: AUTH_TYPE.LOGIN_FAIL, data: e });
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_TYPE.LOGIN, login);
}
