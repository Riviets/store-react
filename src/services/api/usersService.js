import apiClient from "./axiosInstance";

export const usersService = {
  getAllUsers: async () => {
    const response = await apiClient.get("/users");
    return response.data;
  },
  getUserById: async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  },
  getUserCart: async (userId) => {
    const response = await apiClient.get(`/carts/${userId}`);
    return response.data;
  },
  updateUserData: async (userId, userData) => {
    const response = await apiClient.put(`/users/${userId}`, {
      id: Number(userId),
      ...userData,
    });
    return response.data;
  },
};
