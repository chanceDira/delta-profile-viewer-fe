import { useEffect, useState } from "react";
import Link from "next/link";

import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch]  = useState('')

  useEffect(() => {
    setShowSearch(window.location.pathname)
  }, [])

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <p className="text-secondary-600 text-3xl">
                <BsCodeSlash />
              </p>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <RxCross2 /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </div>
        <div className={`${showSearch == '/dashboard' ? '': 'hidden'} w-1/2 `}>
          <div className=" flex flex-row bg-primary-100 p-2 rounded-md ">
            <div>
            <Image
                src="/searchsvg.svg"
                width={25}
                height={25}
                alt="checkImage"
                className=""            />
            </div>
            <div className="w-10/12">
              <input type='text' className=" mx-4 w-full outline-none text-primary-600 bg-primary-100" />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link href="/signup" className="text-primary-600 mr-4 text-lg">
                  Sign up
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  href="/login"
                  className="text-white bg-secondary-600 px-6 py-2 rounded text-lg"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
