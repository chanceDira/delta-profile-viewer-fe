import CheckItem from "@/components/CheckItem";
import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { CiSearch } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Head from "next/head";

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
    if (token) {
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
    }
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
        <Head>
          <title>Delta Talent Pool</title>
          <meta
            name="description"
            content="Here you will access our talent's projects and information."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
      </div>
      <div className="mt-10">
        <div className="text-center w-full mb-6">
          <p className="text-primary-600 text-lg">welcome</p>
          <h1 className="md:text-6xl sm:text-3xl font-bold text-secondary-600">
            Delta Talent Pool
          </h1>
        </div>

        <div className="flex items-center justify-center md:w-6/12 sm:w-10/12 mx-auto relative  md:block ">
          <form>
            <input
              type="text"
              className="w-full h-full outline-none text-primary-600 bg-primary-100 rounded px-16 py-4"
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
      </div>

      <div className="md:flex md:flex-row min-h-screen ">
        <div className=" w-full md:px-40 sm:px-4 py-20">
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
