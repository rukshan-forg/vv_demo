// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const SuccessfulProjects = ({ title, projects }) => {
    return (
        <section className="py-10" id="portfolio">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                                <ul className="list-disc pl-5 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className="text-gray-600">{tech}</li>
                                    ))}
                                </ul>
                                <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

SuccessfulProjects.propTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SuccessfulProjects;
