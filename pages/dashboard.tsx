import CheckItem from "@/components/CheckItem";
import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import Loader from "@/components/Loader";

const Dashboard = () => {
  const GET_PROFILES = gql`
    query {
      getProfiles {
        id
        firstname
        lastname
        email
        github
        about
        photo
        phone
        address
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_PROFILES);

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
        <div className=" w-full px-40 py-20">
          {loading ? (
            <div className="flex items-center justify-center min-h-screen">
              <Loader />
            </div>
          ) : error ? (
            <h2>{error.message}</h2>
          ) : data?.getProfiles?.length > 0 ? (
            data?.getProfiles?.map((profile: any, index: any) => {
              return (
                <div key={index} className="my-8">
                  <TalentCard profile={profile} />
                </div>
              );
            })
          ) : (
            <h2>No profile(s) found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
