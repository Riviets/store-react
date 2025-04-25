import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default ProtectedRoute;
