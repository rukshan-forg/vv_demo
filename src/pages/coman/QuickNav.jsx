// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const QuickNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-full z-40 bg-white shadow-lg">
            {/* Hamburger Icon for Mobile */}
            <div className="flex justify-between items-center px-4 py-3 md:hidden">
                <h1 className="text-blue-600 font-bold text-lg">Menu</h1>
                <button
                    onClick={handleToggle}
                    className="text-blue-600 focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className={`md:flex justify-center space-x-8 text-center py-4 md:py-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                    <a href="#services" className="text-blue-600 font-semibold hover:underline">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#technologies" className="text-blue-600 font-semibold hover:underline">
                        Technologies
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className="text-blue-600 font-semibold hover:underline">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#about-me" className="text-blue-600 font-semibold hover:underline">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-blue-600 font-semibold hover:underline">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default QuickNavBar;
