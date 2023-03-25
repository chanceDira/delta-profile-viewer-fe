import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { CiSearch } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Head from "next/head";
import { CLIENT } from "@/constants/algoliaClient";

const Dashboard = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [resultTalents, setResultTalents] = useState([]);
  const [talentsLoading, setTalentsLoading] = useState(false);
  const token = Cookies.get("token");

  const talentsIndex = CLIENT.initIndex("delta_talents");

  useEffect(() => {
    setTalentsLoading(true);
    talentsIndex
      .search(query)
      .then(({ hits }: any) => {
        setResultTalents(hits);
        setTalentsLoading(false);
      })
      .catch((e) => {
        setTalentsLoading(false);
      });
  }, [query]);

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute top-3 left-7">
              <button type="submit">
                <CiSearch className=" text-2xl text-primary-600" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="md:flex md:flex-row min-h-screen ">
        <div className=" w-full md:px-40 sm:px-4 py-20">
          {talentsLoading && (
            <div className="flex items-center justify-center min-h-screen">
              <Loader />
            </div>
          )}

          {resultTalents.map((profile: any, index: any) => (
            <div key={index} className="my-8">
              <TalentCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
