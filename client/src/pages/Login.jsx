import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center py-14 md:px-20 md:py-20 lg:px-20 lg:py-20">
      <div>
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
      </div>
      <form
        action=""
        className="flex flex-col justify-center items-center bg-green-400 py-8 px-6 gap-3"
      >
        <input
          type="email"
          className="bg-white py-3 rounded-md outline-none pl-3"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          className="bg-white py-3 rounded-md outline-none pl-3 mb-7"
          placeholder="Enter your password"
          required
        />
        <button className="bg-green-300 py-3 px-6 rounded-full shadow-sm shadow-white hover:bg-green-400 cursor-pointer text-white text-lg font-medium">
          Submit
        </button>
        <p className="mt-2">
          If you have not an account.{" "}
          <Link to="/sign-up">
            <span className="font-semibold text-white">Click Here</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
