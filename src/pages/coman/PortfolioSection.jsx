// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const PortfolioSection = ({ title, projects }) => {
    return (
        <section id="portfolio" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    {title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-800">Technologies Used:</h4>
                                <ul className="list-disc list-inside text-gray-600">
                                    {project.technologies.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={project.link}
                                className="inline-block px-6 py-3 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Case Study
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

PortfolioSection.propTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
            image: PropTypes.string.isRequired, // Image URL
            link: PropTypes.string.isRequired,  // Link to case study or project
        })
    ).isRequired,
};

export default PortfolioSection;
