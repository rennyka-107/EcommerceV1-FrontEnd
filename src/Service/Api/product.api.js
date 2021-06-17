import { PRODUCT } from "../../Constant/product.constant";
import axiosClient from "../axios.config";

const ProductApi = {
  getAllProducts() {
    return axiosClient.get(PRODUCT.API_GET_ALL);
  },
};

export default ProductApi;
