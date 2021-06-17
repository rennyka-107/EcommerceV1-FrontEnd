import { useSelector } from "react-redux"

export const GetTodoSelector = () => {
    return useSelector(state=> state.todoReducer);
}