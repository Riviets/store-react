import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/routes";
import { EditModalProvider } from "./context/EditModalContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditModalProvider>
        <RouterProvider router={router} />
      </EditModalProvider>
    </QueryClientProvider>
  );
}

export default App;
