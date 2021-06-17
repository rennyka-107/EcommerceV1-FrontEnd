export const TODO_TYPE = {
  GET_TO_DO: "GET_TO_DO",
  GET_TO_DO_SUCCESS: "GET_TO_DO_SUCCESS",
  GET_TO_DO_FAIL: "GET_TO_DO_FAIL",
};

export const TODO_ACTION = {
  getTodo: () => {
    return {
      type: TODO_TYPE.GET_TO_DO,
    };
  },
  getTodoSuccess: (data) => {
    return {
      type: TODO_TYPE.GET_TO_DO_SUCCESS,
      data: data,
    };
  },
  getTodoFail: (err) => {
    return {
      type: TODO_TYPE.GET_TO_DO_FAIL,
      data: err,
    };
  },
};
