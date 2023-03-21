import React from "react";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-secondary-600 text-white">
      <div className=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                About us
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
                Our Dabble Lab Talent Accelerator is a good asset for making
                international software developers. DELTA Talents focuses on full
                stack development
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Quick links
            </p>
            <div className="flex">
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Signup
              </a>
            </div>
            <div className="flex">
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Login
              </a>
            </div>
            <div className="flex">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Dabblerlab
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div>
              <AiOutlineInstagram className="inline-block mr-4 text-3xl" />
              <FaFacebookSquare className="inline-block mr-4 text-3xl" />
              <AiFillGithub className="inline-block mr-4 text-3xl" />
              <AiFillLinkedin className="inline-block text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright {new Date().getFullYear()} Designed & Built by DELTA
            Talents.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// <div className="bg-secondary-600 p-8 h-48">

// <div className=" flex  items-center justify-center text-white ">
//   <div className="place-self-start w-12">
//     <h1 className="font-bold text-xl ">About us</h1>
//     <p className="">
//       Our Dabble Lab Talent Accelerator is a good asset for making
//       international software developers. DELTA Talents focuses on full stack
//       development
//     </p>
//   </div>
//   <div className="w-1/4">
//     <h1 className="font-bold text-xl">Quick links</h1>
//     <Link href="" className="block">
//     Signup
//     </Link>
//     <Link href="" className="block">
//     Login
//     </Link>
//     <Link href="" className="block">
//     Dabblerlab
//     </Link>
//   </div>
//   <div className="place-self-start w-1/4">
//     <h1 className="font-bold text-xl">Social media</h1>

//   </div>
// </div>
