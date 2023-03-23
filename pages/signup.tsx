import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";
import BtnLoader from "@/components/BtnLoader";
import { useMutation, gql } from "@apollo/client";
import Cookies from "js-cookie";

function Signup() {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [firstname, setfirstName] = useState<any>("");
  const [lastname, setlastName] = useState<any>("");
  const [occupation, setoccupation] = useState<any>("");

  //create a graphql signup mutation query
  const SIGNUP_MUTATION = gql`
    mutation Signup(
      $firstname: String!
      $lastname: String!
      $email: String!
      $password: String!
      $occupation: String!
    ) {
      signup(
        data: {
          firstname: $firstname
          lastname: $lastname
          email: $email
          password: $password
          occupation: $occupation
        }
      ) {
        user {
          firstname
          lastname
          email
        }
        token
      }
    }
  `;

  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATION);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    //first check if the user has entered all the fields
    if (email && password && firstname && lastname && occupation) {
      //if all fields are entered, then call the signup mutation
      signup({
        variables: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          occupation: occupation,
        },
      })
        .then((res) => {
          const { token } = res.data.signup;
          if(token){
            Cookies.set('token', token, { expires: 7 })
            window.location.href = "/dashboard";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="grow min-h-screen ">
          <section className="mt-14">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-600 md:text-2xl text-center">
                    Sign Up
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-primary-600 ">
                        FirstName
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-secondary-50 border border-secondary-50 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5  "
                        placeholder="john"
                        value={firstname}
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-primary-600 ">
                        LastName
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-secondary-50 border border-secondary-50 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5  "
                        placeholder="doe"
                        value={lastname}
                        onChange={(e) => setlastName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-primary-600 ">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-secondary-50 border border-secondary-50 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5  "
                        placeholder="Engineer"
                        value={occupation}
                        onChange={(e) => setoccupation(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-primary-600 ">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-secondary-50 border border-secondary-50 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5  "
                        placeholder="name@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-primary-600 ">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-secondary-50 border border-secondary-50 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5  "
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="relative h-12 w-full text-white bg-secondary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      {loading ? <BtnLoader /> : "Sign Up"}
                    </button>
                    <p className="text-sm font-light text-primary-600 ">
                      Have an account?{" "}
                      <Link
                        href="/login"
                        className="font-medium text-secondary-600 hover:underline "
                      >
                        SignIn
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
