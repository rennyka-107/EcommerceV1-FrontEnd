export const USER_TYPE = {
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_FAIL: "GET_ALL_USERS_FAIL",
};

export const USER_ACTION = {
  getAllUsers: () => {
    return {
      type: USER_TYPE.GET_ALL_USERS,
    };
  },
  getAllUsersSuccess: (data) => {
    return {
      type: USER_TYPE.GET_ALL_USERS_SUCCESS,
      data: data,
    };
  },
  getAllUsersFail: (err) => {
    return {
      type: USER_TYPE.GET_ALL_USERS_FAIL,
      data: err,
    };
  },
};
