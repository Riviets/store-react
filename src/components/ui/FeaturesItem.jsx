import React from "react";

const FeaturesItem = ({ item }) => {
  return (
    <div
      key={item.text}
      className="features-item bg-white shadow-md rounded-sm"
    >
      <img src={item.image} alt={item.text} className="rounded-t-sm w-full" />
      <p className="px-8 py-6 cursor-default text-lg font-medium">
        {item.text}
      </p>
    </div>
  );
};

export default FeaturesItem;
