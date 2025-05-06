import apiClient from "./axiosInstance";

export const authService = {
  login: async (data) => {
    const { username, password } = data;
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
  },
};
