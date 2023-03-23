import { useEffect, useState } from "react";
import Link from "next/link";

import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import Image from "next/image";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [auth, setAuth] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [user, setUser]=useState<any>(null)

  useEffect(() => {
    setShowSearch(window.location.pathname);
  }, []);

  // check if user token available in Cookies and set auth to true
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.remove('currentUser')
    setAuth(false);
    window.location.href = "/";
  };


useEffect(()=>{
  //@ts-ignore
   const currentUser:any = JSON.parse(localStorage.getItem('currentUser'))
   if (currentUser){
    setUser(currentUser)
  }
 },[])

  return (
    <nav className="w-full bg-white shadow relative">
      <div className="flex items-center justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className=" py-3 md:py-5 md:block">
          <Link href="/">
            <p className="text-secondary-600 text-3xl">
              <BsCodeSlash />
            </p>
          </Link>
        </div>
        <div className={`${showSearch == "/dashboard" ? "" : "hidden"} w-1/2 `}>
          <div className="w-10/12 h-6 relative  md:block">
            <input
              type="text"
              className=" mx-4 w-full h-full outline-none text-primary-600 bg-primary-100 rounded pl-6 py-4"
            />
            <CiSearch className=" absolute top-2 left-5 text-primary-600" />
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}
          >
            {auth ? (
              <div className="">
                <CgProfile
                  className="text-4xl text-gray-400 cursor-pointer"
                  onClick={() => setNavbar(!navbar)}
                />
                {navbar && (
                  <div className="absolute top-14 md:right-36 sm:right-4 right-0 z-10 h-30 w-60  bg-white rounded drop-shadow-xl px-4 py-2">
                    <div className="flex items-center">
                      <CgProfile className="text-4xl text-gray-400 mr-4" />
                      <div>
                        <h1 className="text-primary-600 font-bold ">{user && user.firstname}</h1>
                        <p className="text-secondary-600">{user && user.__typename}</p>
                      </div>
                    </div>
                    <div className="border border-gray-300 my-2"></div>
                    <p
                      onClick={() => handleLogout()}
                      className="text-secondary-600"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600 sm:hidden md:block">
                  <Link
                    href="/signup"
                    className="text-primary-600 mr-4 text-lg"
                  >
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
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
