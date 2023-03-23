import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import BtnLoader from "@/components/BtnLoader";
import Cookies from "js-cookie";

const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signin(data: { email: $email, password: $password }) {
      user {
        firstname
        lastname
        email
      }
      token
    }
  }
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signIn, { loading, error, data }] = useMutation(SIGNIN_MUTATION);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signIn({ variables: { email, password } })
      .then((res) => {
        const { token,user } = res.data.signup;
        if (token && user) {
          Cookies.set("token", token, { expires: 7 });
          localStorage.setItem("currentUser",user);
          window.location.href = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
 
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="grow min-h-screen ">
          <section className="mt-20">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-600 md:text-2xl text-center">
                    Login
                  </h1>
                  <div className="text-red-500 mb-4 text-sm">
                    {
                    error ? error.message : ""
                  }
                  </div>
                  <form className="space-y-4 md:space-y-6" action="#">
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
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
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-500 ">Remember me</label>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="relative h-12 w-full text-white bg-secondary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      {loading ? <BtnLoader /> : "Sign in"}
                    </button>
                    <p className="text-sm font-light text-primary-600 ">
                      Don’t have an account?{" "}
                      <Link
                        href="/signup"
                        className="font-medium text-secondary-600 hover:underline "
                      >
                        Sign up
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

export default Login;
