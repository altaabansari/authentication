import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-2/4  bg-gray-100 flex flex-col items-center py-10 gap-8">
        <h1 className="text-3xl">Log In </h1>
        <div className="w-2/4  flex justify-around">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="border border-black" />
        </div>
        <div className="w-2/4  flex justify-around">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border border-black"
          />
        </div>
        <button className="bg-red-300 py-3 px-5 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
