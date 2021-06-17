import { USER } from "../../Constant/user.constant";
import axiosClient from "../axios.config";

const UserApi = {
  login(data) {
    return axiosClient.post(USER.API_LOGIN, data);
  },
  getAllUsers() {
    return axiosClient.get(USER.GET_ALL);
  },
};

export default UserApi;
