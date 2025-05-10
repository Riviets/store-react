import { profileIcon } from "../../assets/icons/profile";
import { formatString } from "../../utils";
import { Address } from "./profile/Address";
import LogoutButton from "./buttons/LogoutButton";
import EditProfile from "./profile/EditProfile";

const UserData = ({ userData }) => {
  return (
    <div className="bg-white rounded-md px-7 md:px-15 py-15 md:py-30 space-y-5 md:space-y-15 relative">
      <div className="flex gap-7 md:gap-12 flex-wrap">
        <div className="flex gap-5 md:gap-10 items-center">
          {profileIcon}
          <div className="flex flex-col gap-5">
            <p className="text-2xl md:text-5xl font-bold">
              {formatString(userData.name.firstname)}{" "}
              {formatString(userData.name.lastname)}
            </p>
            <p className="text-base md:text-xl font-medium text-gray-700">
              {userData.email}
            </p>
          </div>
          <EditProfile />
        </div>
        <Address address={userData.address} />
      </div>
      <div className="flex justify-between flex-wrap gap-3">
        <p className="font-medium text-base md:text-2xl">
          Phone number: {userData.phone}
        </p>
        <LogoutButton className={"absolute bottom-5 right-8"} />
      </div>
    </div>
  );
};

export default UserData;
