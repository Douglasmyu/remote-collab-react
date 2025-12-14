import React from "react"
import collabImage from "../assets/react.svg"; // 🖼️ Replace with your image
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";




function login() {

    const loginWithGoogle = async () => {
        try{
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          alert(`Welcome ${user.displayName}`);
        } catch (error) {
          alert(error.message)
        }
      };
    return(
        <div id="whole" className="min-h-screen flex w-full">
            {/* right side white */}
            <div id="right" className="w-1/2 bg-green-500 text-white flex flex-col items-center justify-center p-8">
                <h2 className="text-3xl font-bold mb-2">Login</h2>
                {/* back button */}
                <div className="absolute top-6 left-6">
                    <Link to="/"><button 
                    className="bg-blue-600 hover:bg-blue-700 
                    text-white font-semibold px-6 py-3 rounded-lg 
                    transition">
                    Back</button></Link>
                </div>
                {/* register */}
                <div id="register">

                </div>
            </div>

            {/* left side */}
            <div id="left" className="w-1/2 bg-white text-white flex items-center justify-center p-10 relative">
                {/* form */}
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
                    <h2>sign in</h2>
                    <label>Email</label>
                    <input type="email"
                    placeholder="name@example.com"
                    className = "w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white mb-2"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold mb-4">
                    Sign in
                    </button>
                    <div className="flex items-center mb-4">
                        <hr className="flex-grow border-gray-600" />
                        <span className="mx-2 text-sm text-gray-500">Or</span>
                        <hr className="flex-grow border-gray-600" />
                    </div>
                    <button onClick={loginWithGoogle} className="w-full bg-white text-black py-2 rounded font-semibold mb-2 flex items-center justify-center gap-2">
                        <span><FcGoogle></FcGoogle></span>sign in with google
                    </button>
                    <p className="text-sm text-gray-400 mt-4 text-center">Don't have an account?{" "}
                        <Link to ="/Register" className="text-blue-400 hover:underline">Sign Up</Link>
                    </p>
                    
                </div>
            </div>
        </div>
    )  
}
export default login