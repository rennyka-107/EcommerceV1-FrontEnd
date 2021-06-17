export const AUTH_TYPE = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

export const AUTH_ACTION = {
  login: (params) => {
    return {
      type: AUTH_TYPE.LOGIN,
      data: params,
    };
  },
  loginSuccess: (data) => {
    return {
      type: AUTH_TYPE.LOGIN_SUCCESS,
      data: data,
    };
  },
  loginFail: (err) => {
    return {
      type: AUTH_TYPE.LOGIN_FAIL,
      data: err,
    };
  },
};
