import { editIcon } from "../../../assets/icons/edit";
import EditProfilePage from "../../../pages/EditProfilePage";
import { useEditModalContext } from "../../../context/EditModalContext";

const EditProfile = () => {
  const { editModalVisible, setEditModalVisible } = useEditModalContext();

  return (
    <>
      <button
        onClick={() => setEditModalVisible(!editModalVisible)}
        className="border-2 border-black p-2 rounded-md cursor-pointer hover:bg-zinc-300 transition-colors duration-200"
      >
        {editIcon}
      </button>
      {editModalVisible && <EditProfilePage />}
    </>
  );
};

export default EditProfile;
