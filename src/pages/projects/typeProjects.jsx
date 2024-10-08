// eslint-disable-next-line no-unused-vars
import React from 'react';
import SuccessfulProjects from '../coman/SuccessfulProjects.jsx';

const TypingProject = () => {
    // Sample projects for the "Web Development" category
    const webDevProjects = [
        {
            title: 'Project Name',
            description: 'Description of the project',
            technologies: ['Item 1', 'Item 2', 'Item 3'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Project Name',
            description: 'Description of the project',
            technologies: ['Item 1', 'Item 2', 'Item 3'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Project Name',
            description: 'Description of the project',
            technologies: ['Item 1', 'Item 2', 'Item 3'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        // Add more projects as needed...
    ];


    return (
        <div>

            <SuccessfulProjects
                title="Typing Projects"
                projects={webDevProjects}
            />

        </div>
    );
};

export default TypingProject;
