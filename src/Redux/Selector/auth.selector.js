import { useSelector } from "react-redux"

export const GetAuthSelector = () => {
    return useSelector(state=> state.authReducer);
}