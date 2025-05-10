import ConfirmModal from "./ui/ConfirmModal";

const ErrorCallback = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <ConfirmModal
      text="Something went wrong. The server might be temporarily unavailable due to high load on the free public API. Please try again in a few seconds."
      onClose={reload}
      confirmText="Reload"
      onConfirm={reload}
    />
  );
};

export default ErrorCallback;
