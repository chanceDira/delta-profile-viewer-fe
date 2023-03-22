import Image from "next/image";
import React from "react";

const CheckItem = ({ name }: any) => {
  return (
    <div className="flex flex-row justify-between items-center cursor-pointer my-2 hover:bg-primary-100 p-2 rounded-md">
      <div className="text-primary-600 text-xl">{name}</div>
      <div>
        <Image
          src="/check.svg"
          width={30}
          height={30}
          alt="checkImage"
          className=""
        />
      </div>
    </div>
  );
};

export default CheckItem;
