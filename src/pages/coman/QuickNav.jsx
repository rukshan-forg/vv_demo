// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const QuickNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="w-full h-screen fixed z-50">
                <button
                    className="fixed bottom-4 right-4 z-50 p-2 text-white bg-blue-600 rounded-full shadow-lg"
                    onClick={handleToggle}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
                    <div className="bg-white rounded-lg p-6 shadow-lg text-center w-80">
                        <h2 className="text-xl font-bold mb-4">Quick Navigation</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#hero" className="text-blue-600 hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#services" className="text-blue-600 hover:underline">Services</a>
                            </li>
                            <li>
                                <a href="#technologies" className="text-blue-600 hover:underline">Technologies</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-blue-600 hover:underline">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about" className="text-blue-600 hover:underline">About Me</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-blue-600 hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickNavBar;
