import produce from "immer";
import { TODO_TYPE } from "../Action/todo.action";

const initialState = {
  todoList: [],
  error: null,
};

export const todoReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TODO_TYPE.GET_TO_DO_SUCCESS:
        draft.todoList = action.data;
        break;
      case TODO_TYPE.GET_TO_DO_FAIL:
        [draft.todoList, draft.error] = [[], action.data];
        break;
      default:
        break;
    }
  });
