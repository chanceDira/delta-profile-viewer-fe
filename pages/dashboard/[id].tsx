import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {FiLink2} from "react-icons/fi"
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const SingleTalent = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className=" float-left w-full">
          <Link href="/dashboard">
            <Image
              src="/back.svg"
              width={40}
              height={40}
              alt="heroImage"
              className="cursor-pointer m-20"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                src="/profileHolder.svg"
                width={100}
                height={100}
                alt="heroImage"
                className=""
              />
            </div>
            <div className=" text-primary-600 font-bold text-3xl ">
              John Doe
            </div>
            <div className=" text-secondary-600">Full stack Developer</div>
            <div className=" text-primary-600 mt-4 w-1/2">
              Am a qualified software engineer, with exprience in fullstack
              development, I can been working An ecommerce project which is
              really doing awesome in terms revenue and ads{" "}
            </div>
          </div>
          <div className=" flex flex-row mt-6">
            <div>
              <FiLink2 className="inline-block mr-4 text-3xl text-secondary-600" />
            </div>
            <div>
              <AiFillGithub className="inline-block mr-4 text-3xl text-secondary-600" />
            </div>
            <div>
              <FaTwitter className="inline-block mr-4 text-3xl text-secondary-600"/>
            </div>
            <div>
             <AiFillLinkedin className="inline-block mr-4 text-3xl text-secondary-600"/>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-center items-center">
            <div className=" text-secondary-600 font-bold text-2xl mb-10">
              Projects
            </div>

            <div className="mb-20 flex flex-wrap justify-center items-center w-10/12">
              <div className="m-6">
                <ProjectCard />
              </div>

              <div className="m-6">
                <ProjectCard />
              </div>

              <div className="m-6">
                <ProjectCard />
              </div>

              <div className="m-6">
                <ProjectCard />
              </div>

              <div className="m-6">
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTalent;
