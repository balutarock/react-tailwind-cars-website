import { Link } from "react-router-dom";

const Home = () => {
    return <nav>
        <div className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-600 container mx-auto px-6 py-2 flex justify-between items-center">
            <Link className="font-bold text-2xl lg:text-4xl" to="#">
                KRB
            </Link>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:block">
                <ul className="inline-flex">
                    <li><Link className="px-4 font-semibold underline" to="/">Home</Link></li>
                    <li><Link className="px-4 hover:text-gray-800" to="#">About</Link></li>
                    <li><Link className="px-4 hover:text-gray-800" to="#">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>;
};

export default Home;