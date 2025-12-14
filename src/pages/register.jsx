import { Link } from "react-router-dom";
import collabImage from "../assets/react.svg"; // 🖼️ Replace with your image
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";



export default function Register() {

  const loginWithGoogle = async () => {
    try{
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* green Left Side yo */}
      <div className="w-1/2 bg-green-500 text-white flex flex-col items-center justify-center p-8">
        <img
          src={collabImage}
          alt="Collaboration"
          className="w-20 h-20 spin-once"
        />
        <h2 className="text-3xl font-bold mb-2">Join Us</h2>
        <p className="text-lg text-blue-100">Create your account to get started</p>
      </div>
      {/* 🔙 Back Button */}
        <div className="absolute top-6 left-6">
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 
                    text-white font-semibold px-6 py-3 rounded-lg 
                    transition">
              Back
            </button>
          </Link>
        </div>

      {/* white Right Side */}
      <div className="w-1/2 bg-gray-900 text-white flex items-center justify-center p-10 relative">
        

        {/* 📄 Form Card */}
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up with Email</h2>

          <label className="text-sm mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white mb-2"
          />
          <p className="text-xs text-gray-400 mb-4">
            We’ll send you a magic link to sign up. No password needed!
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold mb-4">
            Send Magic Link
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-sm text-gray-500">Or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <button className="w-full bg-white text-black py-2 rounded font-semibold mb-2 flex items-center justify-center gap-2">
            <span><FcGoogle></FcGoogle></span> Sign in with Google
          </button>

          <p className="text-sm text-gray-400 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-400 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
