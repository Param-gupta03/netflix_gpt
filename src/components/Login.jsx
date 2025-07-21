import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { BACK_IMAGE } from '../utils/constants';

const Login = () => {
  const provider = new GoogleAuthProvider();
  // const email=useRef(null);
  // const password=useRef(null);
  // const [SignInfo,SetSignInfo]=useState(true);
  // const ToggleSignInfo=()=>{
  //   SetSignInfo(!SignInfo);
  // }
  // const HandleButtonClick=()=>
  // {
  //   const msg = checkValidData(email.current.value, password.current.value);
  //   console.log(email.current.value,password.current.value)
  //   console.log(msg);

  // }

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Success logic
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        // Error handling
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="relative h-screen w-screen">
      <Header  />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={BACK_IMAGE}
          alt="Background"
        />
      </div>

      {/* Overlay Form */}
      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 w-3/12 -translate-x-1/2 -translate-y-1/2  bg-black opacity-80 text-white p-10 flex flex-col">
        {/* <div className="m-2 font-bold text-2xl">{SignInfo ? "Sign In":"Sign Up"}</div>
        {!SignInfo && <input
          className="m-2 p-4 bg-gray-800 rounded"
          type="text"
          placeholder="Name"
        />}
        <input
          ref={email}
          className="m-2 p-4 bg-gray-800 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="m-2 p-4 bg-gray-800 rounded"
          type="password"
          placeholder="Password"
        />
        <button
          className="m-2 p-4 bg-red-600 rounded hover:bg-red-800"
          onClick={HandleButtonClick}
        >
          {SignInfo ? "Sign In":"Sign Up"}
        </button>
          <p className="ml-2 text-white font-semibold cursor-pointer hover:underline"  onClick={ToggleSignInfo}>
            {SignInfo ? "New to Netflix? Sign up now." : "Allready User? Sign in now."}
            </p> */}
        <button onClick={LoginWithGoogle} className=" items-center
    px-4 py-2
    bg-blue-500 hover:bg-blue-600
    text-white font-semibold
    rounded-md shadow
    transition duration-200 ease-in-out">Sign in with Google</button>
    
      </form>
    </div>
  );
};

export default Login;
