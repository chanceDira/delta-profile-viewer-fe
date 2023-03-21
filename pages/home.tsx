import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

function home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="grow">
        <div className="flex justify-center items-center place-self-center mx-auto mt-20">
          <div className=" mr-12 relative ">
            <Image src="/hero.svg" width={400} height={400} alt="heroImage" className="border-primary-50 border-2 rounded-lg z-50 bg-white relative "  />
            <div className="border-primary-50 border-2 rounded-lg bg-secondary-50 absolute top-9 -right-6 h-96 w-96 z-10">
            </div>
          </div>
          <div className="ml-10">
            <h1 className="font-bold text-secondary-600 text-4xl mb-4">DELTA Profile Viewer</h1>
            <p className="text-primary-600 text-sm mb-4">Here you will access our talent's projects and information.</p>
            <button className='text-white bg-secondary-600 px-6 py-2 rounded text-lg'>Get started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default home;
