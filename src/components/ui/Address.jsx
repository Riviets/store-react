import React from "react";
import { formatString } from "../../constants";

export const Address = ({ address }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1">
        <p className="font-semibold text-lg md:text-2xl">
          Address: {formatString(address.city)}, {formatString(address.street)}{" "}
          {address.number}
        </p>
        <p className="font-semibold text-md md:text-lg">
          ({address.geolocation.lat}, {address.geolocation.long})
        </p>
      </div>
      <p className="text-xl">
        <span className="font-bold">Zipcode: </span>
        {address.zipcode}
      </p>
    </div>
  );
};
