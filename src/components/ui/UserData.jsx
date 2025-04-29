import { formatString } from "../../constants";
import { Address } from "./Address";

const UserData = ({ userData }) => {
  return (
    <div className="bg-white rounded-md px-7 md:px-15 py-15 md:py-30 space-y-5 md:space-y-10">
      <div className="flex gap-7 md:gap-12 flex-wrap">
        <div className="flex flex-col gap-5">
          <p className="text-3xl md:text-5xl font-bold">
            {formatString(userData.name.firstname)}{" "}
            {formatString(userData.name.lastname)}
          </p>
          <p className="text-xl font-medium text-gray-700">{userData.email}</p>
        </div>
        <Address address={userData.address} />
      </div>
      <p className="font-medium text-lg md:text-2xl">
        Phone number: {userData.phone}
      </p>
    </div>
  );
};

export default UserData;
