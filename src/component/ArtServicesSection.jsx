import ArtServicesImage from "../assets/bn17.jpg"; // Replace with your actual image path
import useScrollAnimation from "./ScrollAnimation";

export default function ArtServicesSection() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center">

                {/* Right Image Section */}
                <div ref={ref}
                     className={`lg:w-1/2 w-full ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
                >
                    <img
                        src={ArtServicesImage}
                        alt="Art Services"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>

                {/* Left Content Section */}
                <div ref={ref}
                     className={`lg:w-1/2 w-full lg:pr-16 mt-8 lg:mt-0 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Art Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Our team provides stunning and unique art services that can bring your ideas to life. From illustrations to custom art pieces, we cater to all artistic needs with a passion for creativity.
                    </p>

                    <ul className="mt-4 space-y-4">
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6m-6-8h6" />
                            </svg>
                            <span className="text-gray-500">Custom illustrations and designs</span>
                        </li>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M9 8h6" />
                            </svg>
                            <span className="text-gray-500">Hand-drawn art and digital media</span>
                        </li>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m-4-4v8m0-8h8" />
                            </svg>
                            <span className="text-gray-500">Personalized art for branding and projects</span>
                        </li>
                    </ul>

                    <div className="mt-8">
                        <a href="/art" className="inline-block px-6 py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
