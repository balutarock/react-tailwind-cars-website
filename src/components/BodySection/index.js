import rating from '../../rating.jpg'

const Home = () => {
    return <div>
        {/*  Hero section */}
        <div className="py-28 px-6 bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-600 flex flex-row justify-center items-center">
            <div className="">
                <h2 className="text-4xl font-bold mb-2 text-white">
                    Get Rental Cars & Bikes instantly!
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                    Enjoy your journey, feel like your own vehicle.
                </h3>
                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Get Rent
                </button>
            </div>
            <div className="hidden md:block">
                <img src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1686073679/Gopi/Website/car_rental-removebg-preview_bhqs2g.png" alt="rental cars" className="w-96 h-auto" />
            </div>
        </div>
        {/* Cars Section */}
        <section className="container mx-auto p-10 md:px-40">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Cars & Bikes
            </h2>
            <div className="p-2 flex justify-center items-center flex-wrap mb-20 py-10 border-solid border-2 border-indigo-500 rounded-lg shadow-lg">
                <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Car model 1</h4>
                    <p className="text-gray-600 mb-8">An automobile is a self-propelled motor vehicle intended for passenger transportation on land. It usually has four wheels and an internal combustion engine fueled most often by gasoline, a liquid petroleum product.</p>
                    <button className="bg-indigo-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Get Rent
                    </button>
                </div>
                <div className="w-full md:w-1/4">
                    <img className="w-64 h-auto" src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1686075450/Gopi/Website/modern-sport-car-illustration_232942-45-removebg-preview_coahio.png" alt="Monitoring" />
                </div>
            </div>
            <div className="p-2 bg-gradient-to-r from-pink-100 via-pink-200 to-orange-200 flex justify-center items-center flex-wrap mb-20 py-10 border-solid border-2 border-indigo-500 rounded-lg shadow-lg">
                <div className="w-full md:w-1/4">
                    <img className="w-64 h-auto" src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1686075450/Gopi/Website/modern-sport-car-illustration_232942-45-removebg-preview_coahio.png" alt="Reporting" />
                </div>
                <div className="w-full md:w-1/2 pl-10">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Car model 2</h4>
                    <p className="text-gray-600 mb-8">An automobile is a self-propelled motor vehicle intended for passenger transportation on land. It usually has four wheels and an internal combustion engine fueled most often by gasoline, a liquid petroleum product.</p>
                    <button className="bg-indigo-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Get Rent
                    </button>
                </div>
            </div>

            <div className="p-2 flex justify-center items-center flex-wrap mb-20 py-10 border-solid border-2 border-indigo-500 rounded-lg shadow-lg">
                <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Car model 3</h4>
                    <p className="text-gray-600 mb-8">An automobile is a self-propelled motor vehicle intended for passenger transportation on land. It usually has four wheels and an internal combustion engine fueled most often by gasoline, a liquid petroleum product.</p>
                    <button className="bg-indigo-500 text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Get Rent
                    </button>
                </div>
                <div className="w-full md:w-1/4">
                    <img className="w-64 h-auto" src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1686075450/Gopi/Website/modern-sport-car-illustration_232942-45-removebg-preview_coahio.png" alt="Syncing" />
                </div>
            </div>
        </section>
        {/* Testimonial */}
        <section className="bg-gray-100">
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Testimonials
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <div>
                            <img src={rating} alt="Syncing" />
                        </div>
                        <div className="bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">We were very satisfied with the organization of picking up the car at the airport and dropping it off at the ferry in Mahé. There were no problems and the car served our purpose. I definitely recommend it!</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <div>
                            <img src={rating} alt="Syncing" />
                        </div>
                        <div className="bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">We were very satisfied with the organization of picking up the car at the airport and dropping it off at the ferry in Mahé. There were no problems and the car served our purpose. I definitely recommend it!</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-4">
                        <div>
                            <img src={rating} alt="Syncing" />
                        </div>
                        <div className="bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">We were very satisfied with the organization of picking up the car at the airport and dropping it off at the ferry in Mahé. There were no problems and the car served our purpose. I definitely recommend it!</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Call to action section */}
        <section className="bg-indigo-500">
            <div className="container mx-auto px-6 text-center py-20">
                <h2 className="mb-6 text-4xl font-bold text-center text-white">
                    Limited in Stock
                </h2>
                <h3 className="my-4 text-2xl text-white">
                    Get hire the bikes in smarter way!
                </h3>
                <button
                    className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
                >
                    Pre Order
                </button>
            </div>
        </section>
    </div>;
};

export default Home;