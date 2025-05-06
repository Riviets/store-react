import Navbar from "./ui/Navbar";
import Spinner from "./ui/Spinner";

const WithLoader = ({ isLoading, children, addHeader = false }) => {
  if (isLoading)
    return (
      <div className="flex-center h-screen">
        <Spinner />
      </div>
    );
  return (
    <div className="min-h-screen">
      {addHeader && <Navbar />}
      {children}
    </div>
  );
};

export default WithLoader;
