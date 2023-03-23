import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Primary } from "./Buttons";

const TalentCard = ({ profile }: any) => {
  const handleClick = () => {
    window.location.href = `/dashboard/${profile.id}`;
  };
  return (
    <div className="flex flex-row bg-primary-100 rounded-xl py-10 px-14">
      <div className="mr-4 w-40 h-40">
        <img src={`${profile.photo}`} className=" rounded-full" alt="image" />
      </div>
      <div className=" w-3/4">
        <div className=" text-primary-600 font-bold text-3xl ">
          {profile.firstname} {profile.lastname}
        </div>
        <div className=" text-secondary-600">Full stack Developer</div>
        <div className=" text-primary-600 mt-4"> {profile.about}</div>
        <div className="mt-4">
          <Primary name="View profile" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
