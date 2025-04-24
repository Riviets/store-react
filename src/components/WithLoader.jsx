import Spinner from "./Spinner";

const WithLoader = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <div className="flex-center h-screen">
        <Spinner />
      </div>
    );
  return <>{children}</>;
};

export default WithLoader;
