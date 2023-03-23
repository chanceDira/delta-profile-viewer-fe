import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FiLink2 } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const GET_PROFILE = gql`
  query GetProfile($profileId: ID!) {
    getProfile(profileId: $profileId) {
      id
      firstname
      lastname
      email
      github
      about
      photo
      phone
      address
      skills
      project {
        id
        projectname
        projectdescription
        githuburl
      }
    }
  }
`;

const SingleTalent = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { profileId: id },
  });

  console.log(data);

  return (
    <>
      <div className="relative">
        <div>
          <Navbar />
        </div>

        <div className=" absolute top-12 left-12 ">
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

        {loading ? (
          <div className="flex items-center justify-center min-h-screen ">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full mt-14 ">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={`${data?.getProfile.photo}`}
                  width={100}
                  height={100}
                  alt="heroImage"
                  className="rounded-full w-28 h-28"
                />
              </div>
              <div className=" text-primary-600 font-bold text-3xl ">
                {data?.getProfile.firstname} {data?.getProfile.lastname}
              </div>
              <div className=" text-secondary-600">Full stack Developer</div>
              <div className=" text-primary-600 mt-4 w-1/2">
                {data?.getProfile.about}
              </div>
            </div>
            <div className=" flex flex-row mt-6">
              <div>
                <FiLink2 className="inline-block mr-4 text-3xl text-secondary-600 cursor-pointer" />
              </div>
              <div>
                <AiFillGithub className="inline-block mr-4 text-3xl text-secondary-600 cursor-pointer" />
              </div>
              <div>
                <FaTwitter className="inline-block mr-4 text-3xl text-secondary-600 cursor-pointer" />
              </div>
              <div>
                <AiFillLinkedin className="inline-block mr-4 text-3xl text-secondary-600 cursor-pointer" />
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center">
              <div className=" text-secondary-600 font-bold text-2xl mb-10">
                Projects
              </div>

              <div className="mb-20 flex flex-wrap justify-center items-center w-10/12">
                {data?.getProfile.project.map((project: any) => (
                  <div className="m-6">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleTalent;
