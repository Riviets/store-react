import { useState } from "react";
import EditProfileForm from "../components/ui/profile/EditProfileForm";

const EditProfilePage = () => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex-center z-40">
      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;
