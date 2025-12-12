import React from "react"
import collabImage from "../assets/react.svg"; // 🖼️ Replace with your image
import { Link } from "react-router-dom";

function login() {
    return(
        <div id="whole" className="min-h-screen flex w-full">
            {/* right side white */}
            <div id="right" className="w-1/2 bg-green-500 text-white flex flex-col items-center justify-center p-8">
                <h2>Login</h2>
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
            <div id="left" className="w-1/2 bg-white">

            </div>
        </div>
    )  
}
export default login