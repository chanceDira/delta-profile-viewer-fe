import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Primary } from "./Buttons";

const TalentCard = () => {
  return (
    <div className="flex flex-row bg-primary-100 rounded-xl md:py-10 md:px-14 sm:py-4 mb-6">
      <div className="md:mr-10 sm:mr-2 sm:pl-4">
        <Image
          src="/profileHolder.svg"
          width={100}
          height={100}
          alt="heroImage"
          className="sm:w-96 md:w-24"
        />
      </div>
      <div>
        <div className=" text-primary-600 font-bold md:text-3xl ">John Doe</div>
        <div className=" text-secondary-600">Full stack Developer</div>
        <div className=" text-primary-600 mt-4 sm:text-xs">
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
