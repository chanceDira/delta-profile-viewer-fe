import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Primary } from "./Buttons";

const TalentCard = () => {
  return (
    <div className="flex flex-row bg-primary-100 rounded-xl py-10 px-14">
      <div className="pr-10">
        <Image
          src="/profileHolder.svg"
          width={100}
          height={100}
          alt="heroImage"
          className=""
        />
      </div>
      <div>
        <div className=" text-primary-600 font-bold text-3xl ">John Doe</div>
        <div className=" text-secondary-600">Full stack Developer</div>
        <div className=" text-primary-600 mt-4">
          Am a qualified software engineer, with exprience in fullstack
          development, I can been working An ecommerce project which is really
          doing awesome in terms revenue and ads{" "}
        </div>
        <div className="mt-4">
          <Link href="/dashboard/7438">
            <Primary name="View profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
