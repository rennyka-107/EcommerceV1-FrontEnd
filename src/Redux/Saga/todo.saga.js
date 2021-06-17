import { isEmpty } from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import TodoApi from "../../Service/Api/todo.api";
import { TODO_TYPE } from "../Action/todo.action";

function* getTodoList(action) {
  try {
    const response = yield call(TodoApi.getTodo);
    if (!isEmpty(response.data)) {
      yield put({ type: TODO_TYPE.GET_TO_DO_SUCCESS, data: response.data });
    }
  } catch (e) {
    yield put({ type: TODO_TYPE.GET_TO_DO_FAIL, data: e });
  }
}

export function* todoSaga() {
  yield takeLatest(TODO_TYPE.GET_TO_DO, getTodoList);
}
