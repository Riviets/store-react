import apiClient from "./axiosInstance";

export const productsService = {
  getAllProducts: async () => {
    const response = await apiClient.get("/products");
    return response.data;
  },
  getProductById: async (productId) => {
    const response = await apiClient.get(`products/${productId}`);
    return response.data;
  },
};
