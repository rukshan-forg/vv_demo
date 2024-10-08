import React from 'react';
import PropTypes from 'prop-types';

const TechnologiesSection = ({ title, technologies }) => {
    return (
        <section id="technologies" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    {title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-16 h-16 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Prop Types
TechnologiesSection.propTypes = {
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired, // URL of the logo or icon
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TechnologiesSection;
