import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [SignInfo,SetSignInfo]=useState("Sign In");
  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="Background"
        />
      </div>

      {/* Overlay Form */}
      <form className="absolute top-1/2 left-1/2 w-3/12 -translate-x-1/2 -translate-y-1/2  bg-black opacity-80 text-white p-10 flex flex-col">
        <div className="m-2 font-bold text-2xl">{SignInfo}</div>
        {SignInfo==="Sign Up" ? (<input
          className="m-2 p-4 bg-gray-800 rounded"
          type="username"
          placeholder="Username"
        />):null}
        <input
          className="m-2 p-4 bg-gray-800 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="m-2 p-4 bg-gray-800 rounded"
          type="password"
          placeholder="Password"
        />
        <button
          className="m-2 p-4 bg-red-600 rounded hover:bg-red-800"
          type="submit"
        >
          {SignInfo}
        </button>
          <p className="ml-2 text-white font-semibold cursor-pointer hover:underline"  onClick={()=>{ SetSignInfo(SignInfo==="Sign In" ? "Sign Up" : "Sign In")}}>
            {SignInfo === "Sign In" ? "Sign up now." : "Sign in now."}
            </p>
      </form>
    </div>
  );
};

export default Login;
