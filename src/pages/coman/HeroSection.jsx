// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
    return (
        <section  className="h-screen flex items-center justify-between px-8 lg:px-16 ">
            {/* Image Left Section */}
            <div className="lg:w-1/2 w-full lg:mr-8 mt-8 lg:mt-0 order-1 lg:order-none">
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Text Right Section */}
            <div className="lg:w-1/2 w-full text-left order-none lg:order-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {title}
                </h1>
                <p className="text-lg text-gray-600 mb-6 max-w-md">
                    {subtitle}
                </p>
                <a
                    href={ctaLink}
                    className="inline-block px-8 py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-md"
                >
                    {ctaText}
                </a>
            </div>
        </section>
    );
};

// Default Props
HeroSection.defaultProps = {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    backgroundImage: 'https://via.placeholder.com/600x400',
    ctaText: 'Default CTA Text',
    ctaLink: '#',
};

// Prop Types
HeroSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    backgroundImage: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
};

export default HeroSection;
