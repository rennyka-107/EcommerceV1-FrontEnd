import produce from "immer";
import { USER_TYPE } from "../Action";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_TYPE.GET_ALL_USERS_SUCCESS:
        draft.users = action.data;
        break;
      default:
        break;
    }
  });
