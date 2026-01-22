import { Link } from "react-router-dom"


function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center h-screen p-2">
        <header className="w-full flex items-center bg  h-16 border border-blue-600">
            <h1 className="  justify-content-center pl-5 w-1/4 "> icon + LuxHotel</h1>
            <nav className="w-1/2">

            </nav>
            <nav className="w-1/4 h-full p-2  flex justify-evenly">
                <Link to={"login"} className="h-full rounded-lg bg-gray-100 p-3" > Log in </Link>
                <Link to={"login"} className="h-full rounded-lg bg-blue-600 p-3 text-white" > Prueba gratuita </Link>
            </nav>
        </header>
        <main className="w-full h-screen justify-center flex items-center bg my-5 border border-blue-600">
            more content
        </main>
    </div>
  )
}

export default LandingPage