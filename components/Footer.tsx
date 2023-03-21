import React from "react";
import  Link  from 'next/link';
import {AiOutlineInstagram,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-secondary-600 p-8 h-48">

    <div className=" flex  items-center justify-center text-white ">
      <div className="place-self-start w-12">
        <h1 className="font-bold text-xl ">About us</h1>
        <p className="">
          Our Dabble Lab Talent Accelerator is a good asset for making
          international software developers. DELTA Talents focuses on full stack
          development
        </p>
      </div>
      <div className="w-1/4">
        <h1 className="font-bold text-xl">Quick links</h1>
        <Link href="" className="block">
        Signup
        </Link>
        <Link href="" className="block">
        Login
        </Link>
        <Link href="" className="block">
        Dabblerlab
        </Link>
      </div>
      <div className="place-self-start w-1/4">
        <h1 className="font-bold text-xl">Social media</h1>

        <div>
          <AiOutlineInstagram className="inline-block mr-4 text-3xl" />
          <FaFacebookSquare className="inline-block mr-4 text-3xl" />
          <AiFillGithub className="inline-block mr-4 text-3xl" />
          <AiFillLinkedin className="inline-block text-3xl" />
        </div>

      </div>
    </div>
    <p className="text-center text-white">Designed & Built by DELTA Talents</p>
    </div>
  );
}

export default Footer;
