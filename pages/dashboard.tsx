import CheckItem from "@/components/CheckItem";
import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { CiSearch } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
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

  const SEARCH_PROFILE = gql`
    query ($fname: String!, $lname: String!) {
      filterProfiles(fname: $fname, lname: $lname) {
        id
        firstname
        lastname
        email
        photo
        about
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROFILES);
  const [searchProfile, { loading: loading2, error: error2, data: data2 }] =
    useLazyQuery(SEARCH_PROFILE);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const token = Cookies.get("token");

  const [talents, setTalents] = useState([]);

  const handleSearchProfile = (e: any) => {
    e.preventDefault();
    searchProfile({
      variables: {
        fname: firstName,
        lname: lastName,
      },
    })
      .then((res) => {
        setFirstName("");
        setLastName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //redirect to login page if user is not logged in
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

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
        <div className=" w-full md:px-40 sm:px-4 py-20">
          <>
            <div className="w-10/12 h-6 relative  md:block mb-36">
              <form>
                <input
                  type="text"
                  className=" mx-4 w-full h-full outline-none text-primary-600 bg-primary-100 rounded pl-10 py-4"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div
                  onClick={(e) => handleSearchProfile(e)}
                  className="absolute top-3 left-7"
                >
                  <button type="submit">
                    <CiSearch className=" text-2xl text-primary-600" />
                  </button>
                </div>
              </form>
            </div>
          </>
          <div className={`${data2 && "hidden"}`}>
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

          <div className={`${!data2 && "hidden"}`}>
            {loading2 ? (
              <div className="flex items-center justify-center min-h-screen">
                <Loader />
              </div>
            ) : error2 ? (
              <h2>{error2.message}</h2>
            ) : data2?.filterProfiles?.length > 0 ? (
              data2?.filterProfiles?.map((profile: any, index: any) => {
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
    </div>
  );
};

export default Dashboard;
