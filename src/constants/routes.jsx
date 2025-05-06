import ProtectedRoute from "../components/ProtectedRoute";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/shop",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product-page/:productId",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <UserPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
