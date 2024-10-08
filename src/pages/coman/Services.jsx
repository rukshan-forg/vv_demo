// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ServicesSection = ({ title, services }) => {
    return (
        <section id="services" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-4">
                                {service.description || "Description coming soon..."}
                            </p>

                            {/* Display details as a list if they exist */}
                            {service.details && service.details.length > 0 && (
                                <ul className="list-disc list-inside text-gray-600">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="mb-2">{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Prop Types
ServicesSection.propTypes = {
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            details: PropTypes.arrayOf(PropTypes.string), // Optional list of details
        })
    ).isRequired,
};

export default ServicesSection;
