import { Link } from "react-router-dom"

function nav(){
    return(
        <nav id ="nav" className="fixed top-0 left-0 w-full z-50 bg-slate-700 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div id ="icon-to-the-left" className="text-white font-bold text-lg">
                    <a id = "icon" href="/">Remote Collab</a>
                </div>
                <div id="routes-blocks-hidden" className="hidden md:block">
                    <div className = "flex items-center space-x-8">
                        <Link className ="text-white hover:text-cyan-100
                        px-3 py-2 text-sm font-medium rounded-md
                        transition duration-300" 
                        href="/About">
                        About</Link>
                        <Link className ="text-white hover:text-cyan-100
                        px-3 py-2 text-sm font-medium rounded-md
                        transition duration-300"
                        href="/Login">
                        Login</Link>
                        
                        <Link className ="text-white hover:text-cyan-100
                        px-3 py-2 text-sm font-medium rounded-md
                        transition duration-300"
                        href="/Register">
                        Register</Link>
                    </div>
                </div>  
            </div>
            
        </nav>
    )
}
export default nav
