import { Link } from "react-router-dom"

function About(){
    return(
        <div>
            <div className="top-0 left-0 w-fit bg-blue-600 hover:bg-blue-700 
                text-white font-semibold px-6 py-3 rounded-md transition ">
                    <button>
                    <Link to="/">Back</Link>
                    </button>
            </div>
            <div className="container mx-auto px-4 py-8 relative z-10 max-w-5xl text-black">
                
                <div id ="title" className="text-center mb-10">
                <h1 className="text-text-4xl md:text-5xl font-bold text-white mb-3 ">About Remote Collab</h1>
                </div>
                <div id="features-1" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="text-blue-800 mb-4 text-3xl">
                            <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">✅</span>
                        </div>
                        <h2>Real-time collaboration</h2>
                    </div>
                    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="text-blue-800 mb-4 text-3xl">
                            <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80"> 🧠</span>
                        </div>
                        <h2>
                            AI-powered task summaries
                        </h2>
                    </div>
                    <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white border-opacity-20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="text-blue-800 mb-4 text-3xl">
                            <span className="inline-block p-3 rounded-full bg-blue-100 bg-opacity-80">🗂️</span>
                        </div>
                        <h2>Organized multi-channel messaging</h2>
                    </div>
                </div>
            </div> 
        </div>
        
        
        
    )
}
export default About