import { connect } from "react-redux";
import Login from "../../Pages/Login";
import { AUTH_ACTION } from "../Action";

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

const mapDispatchToProps = {
  login: AUTH_ACTION.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
