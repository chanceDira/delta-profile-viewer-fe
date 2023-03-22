import CheckItem from "@/components/CheckItem";
import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="md:flex md:flex-row min-h-screen ">
        <div className="w-1/4 border-r-2  ">
          <div className="mx-10 my-20 md:block sm:hidden">
            <CheckItem name="All" />
            <CheckItem name="Names" />
            <CheckItem name="Countries" />
            <CheckItem name="Achievements" />
            <CheckItem name="Certificates" />
          </div>
        </div>
        <div className=" w-full md:px-40 md:py-20 sm:px-6 sm:py-6">
          <TalentCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
