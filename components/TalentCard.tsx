import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Primary } from "./Buttons";

const trimString = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
};


const TalentCard = ({ profile }: any) => {
  const handleClick = () => {
    window.location.href = `/dashboard/${profile.id}`;
  };
  return (
    <div className="flex flex-row bg-primary-100 rounded-xl md:py-10 md:px-14 sm:py-4 sm:px-4">
      <div className="mr-4 w-40 h-40">
        <img src={`${profile.photo}`} className=" rounded-full md:w-40 md:h-40 sm:w-28 sm:h-28 object-cover" alt="image" />
      </div>
      <div className=" w-3/4">
        <div className=" text-primary-600 font-bold md:text-3xl sm:text-lg">
          {profile.firstname} {profile.lastname}
        </div>
        <div className=" text-secondary-600">Full stack Developer</div>
        <div className=" text-primary-600 sm:hidden md:block mt-4"> {trimString(profile.about,200)}</div>
        <div className=" text-primary-600 sm:block md:hidden mt-4"> {trimString(profile.about,10)}</div>
        <div className="mt-4">
          <Primary name="View profile" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
