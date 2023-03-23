import Image from "next/image";
import React, { useState } from "react";

const trimString = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
};

const ProjectCard = ({ project }: any) => {
  const [showProjectDetailModel, setShowProjectDetailModel] = useState(false);

  const handleShowProjectDetailModel = (e: any) => {
    e.preventDefault();
    setShowProjectDetailModel(!showProjectDetailModel);
  };

  const handleViewCode = () => {
    //open new tab with link to github
    window.open(project.githuburl, "_blank");
  };

  const handleViewVideo = () => {
    //open new tab with link to video
    window.open(project.githuburl, "_blank");
  };
  return (
    <>
      {/* ===============start :: project details model==================  */}
      <div
        className={`min-h-screen w-screen right-0 top-0 z-30 fixed bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center px-4 ${
          showProjectDetailModel === true ? "block" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-primary-600 text-xl text-center w-11/12">
              Project detail
            </h3>
            <div
              className=" bg-secondary-100 p-2 rounded-full cursor-pointer"
              onClick={(e) => handleShowProjectDetailModel(e)}
            >
              <Image
                src="/close.svg"
                width={15}
                height={15}
                alt="heroImage"
                className="cursor-pointer"
              />
            </div>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <div className="flex flex-col justify-center items-center mx-10">
              <div className="m-4 w-full">
                <div>
                  <div>
                    <Image
                      src="/projectHolder.svg"
                      width={300}
                      height={300}
                      alt="heroImage"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="p-2 text-primary-600 text-xl font-bold">
                    {project && project.projectname}
                  </div>
                </div>

                <div className="flex flex-row items-center p-2 my-2 italic text-primary-600">
                  {project && project.projectdescription}
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="flex justify-center bg-secondary-600 hover:bg-primary-400 p-4 rounded-md mx-1 cursor-pointer"
                  onClick={() => handleViewCode()}
                >
                  <h3 className=" text-white font-bold">View code</h3>
                </div>

                <div
                  className="flex justify-center bg-secondary-600 hover:bg-primary-400 p-4 rounded-md mx-1 mt-4 cursor-pointer"
                  onClick={() => handleViewVideo()}
                >
                  <h3 className=" text-white font-bold">View video</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============end :: project details model==================  */}
      <div className="w-80 h-80">
        <div>
          <Image
            src="/projectHolder.svg"
            width={300}
            height={300}
            alt="heroImage"
            className="cursor-pointe w-full"
          />
        </div>
        <div className="p-2 text-primary-600 text-xl font-bold border-l-4 border-primary-100">
          {trimString(project && project.projectname, 25)}
        </div>
        <div
          className="bg-primary-600 cursor-pointer text-white flex flex-row justify-between items-center p-3"
          onClick={(e) => handleShowProjectDetailModel(e)}
        >
          <div className="cursor-pointer">View project</div>
          <div className="cursor-pointer">
            <Image
              src="/camera.svg"
              width={20}
              height={20}
              alt="heroImage"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
