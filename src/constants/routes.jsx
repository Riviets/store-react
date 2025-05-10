import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import ErrorCallback from "../components/ErrorCallback";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorCallback />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "shop",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "product-page/:productId",
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
