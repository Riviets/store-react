import apiClient from "./axiosInstance";

export const productsService = {
  getAllProducts: async () => {
    const responce = await apiClient.get("/products");
    return responce.data;
  },
};
