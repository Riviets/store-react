import Footer from "./Footer";
import Navbar from "./ui/Navbar";
import Spinner from "./ui/Spinner";

const LayoutLoader = ({
  isLoading,
  children,
  addHeader = false,
  addFooter = false,
}) => {
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
      {addFooter && <Footer />}
    </div>
  );
};

export default LayoutLoader;
