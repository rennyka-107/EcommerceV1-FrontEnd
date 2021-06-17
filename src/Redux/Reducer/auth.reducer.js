import produce from "immer";
import { isEmpty } from "lodash";
import { getAuth, saveAuth } from "../../Utils/localStorage";
import { AUTH_TYPE } from "../Action";

const user = getAuth()

const initialState = {
  isLoged: !isEmpty(user),
  userInformation: user,
  error: null,
};

export const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AUTH_TYPE.LOGIN_SUCCESS:
        [draft.isLoged, draft.userInformation, draft.error] = [
          true,
          action.data,
          null,
        ];
        saveAuth(action.data);
        break;
      case AUTH_TYPE.LOGIN_FAIL:
        [draft.isLoged, draft.userInformation, draft.error] = [
          false,
          null,
          action.data,
        ];
        break;
      default:
        break;
    }
  });
