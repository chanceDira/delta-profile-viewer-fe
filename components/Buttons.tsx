import React from "react";

export const Primary = ({ name }: any) => {
  return (
    <button className="text-white bg-secondary-600 md:px-6 md:py-2 sm:px-6 sm:py-2 rounded md:text-lg sm:text-xs">
      {name}
    </button>
  );
};
