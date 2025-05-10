import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useEditModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export const EditModalProvider = ({ children }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);

  const value = {
    editModalVisible,
    setEditModalVisible,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
