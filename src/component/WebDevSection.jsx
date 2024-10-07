import WebDevImage from "../assets/webDev.jpg";
import useScrollAnimation from "./ScrollAnimation";


export default function WebDevSection() {

    const [ref, isVisible] = useScrollAnimation();


    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">

                {/* Left Image Section */}
                <div ref={ref}
                    className={`lg:w-1/2 w-full ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
                >
                    <img
                        src={WebDevImage}
                        alt="Web Development"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>

                {/* Right Content Section */}
                <div ref={ref}
                    className={`lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-0 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Web Development Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        We offer a wide range of web development services tailored to meet your unique business needs. Whether you need a fully customized solution or a responsive and fast website, we’ve got you covered.
                    </p>

                    <ul className="mt-4 space-y-4">
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6m-6-8h6" />
                            </svg>
                            <span className="text-gray-500">Custom Websites with intuitive design</span>
                        </li>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M9 8h6" />
                            </svg>
                            <span className="text-gray-500">Responsive across all devices</span>
                        </li>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m-4-4v8m0-8h8" />
                            </svg>
                            <span className="text-gray-500">Optimized for speed and reliability</span>
                        </li>
                    </ul>


                    <div className="mt-8 ">
                        <a href="/web" className="inline-block px-6 py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
