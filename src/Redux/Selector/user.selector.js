import { useSelector } from "react-redux"

export const GetUserSelector = () => {
    return useSelector(state=> state.userReducer);
}