import { TODO } from "../../Constant/todo.constant";
import axiosClient from "../axios.config";

const TodoApi = {
  getTodo() {
    return axiosClient.get(TODO.API_TO_DO);
  },
};

export default TodoApi;
