import React, { useState } from "react";

const SignUp = () => {
  const [registerData, setRegisterData] = useState({});
  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(registerData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = await fetch(
      "http://localhost:2424/api/v1/authentication/create-user",
      {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await user.json();
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="w-2/4  bg-gray-100 flex flex-col items-center py-10 gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Sign Up </h1>
        <div className="w-2/4  flex justify-around">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border border-black"
            onChange={handleChange}
          />
        </div>
        <div className="w-2/4  flex justify-around">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border border-black"
            onChange={handleChange}
          />
        </div>
        <button className="bg-green-300 py-3 px-5 rounded-md" type="submit">
          Sign/up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
