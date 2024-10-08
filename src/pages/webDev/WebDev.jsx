// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../coman/HeroSection';
import backgroundImg from '../../assets/webHero.svg';
import ServicesSection from "../coman/Services.jsx";
import TechnologiesSection from "../coman/TechnologiesSection.jsx";
import PortfolioSection from "../coman/PortfolioSection.jsx";
import AboutMe from "../coman/AboutMe.jsx";
import ContactUs from "../coman/ContactUs.jsx";
import QuickNav from "../coman/QuickNav.jsx";

const WebDev = () => {

    const webDevServices = [
        {
            name: 'Web Application Development',
            description: 'Building robust and scalable web applications to meet your business needs.',
            details: [
                'Custom web application solutions',
                'Full-stack development (Frontend & Backend)',
                'Integration with third-party APIs',
                'Highly scalable architecture',
                'Maintenance and support'
            ]
        },
        {
            name: 'Web Design',
            description: 'Creating stunning and user-friendly website designs that are responsive and modern.',
            details: [
                'Responsive and mobile-friendly design',
                'User experience (UX) optimization',
                'Custom design tailored to your brand',
                'SEO-friendly design practices',
                'Wireframes and prototypes'
            ]
        },
        {
            name: 'Mobile Development (Coming Soon)',
            description: '',
            details: [] // No details yet, as it is coming soon
        },
        {
            name: 'Software Development (Coming Soon)',
            description: '',
            details: []
        }
    ];

    const technologies = [
        {
            name: 'React',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
            description: 'A JavaScript library for building user interfaces.',
        },
        {
            name: 'Laravel',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
            description: 'A PHP framework for web artisans.',
        },
        {
            name: 'Tailwind CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
            description: 'A utility-first CSS framework for rapid UI development.',
        },
        {
            name: 'MySQL',
            logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
            description: 'A popular open-source relational database management system.',
        },
        {
            name: 'PHP',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
            description: 'A popular general-purpose scripting language that is especially suited to web development.',
        },
        {
            name: 'Node.js',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
            description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        },
        {
            name: 'Bootstrap',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
            description: 'The most popular CSS Framework for developing responsive and mobile-first websites.',
        },
        {
            name: 'HTML5',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
            description: 'A markup language used for structuring and presenting content on the World Wide Web.',
        },
        {
            name: 'Java',
            logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
            description: 'A high-level, class-based, object-oriented programming language widely used in software development.',
        },
        {
            name: 'Figma',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            description: 'A web-based interface design tool used for real-time collaboration in design projects.',
        },
    ];

    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'Developed a full-featured e-commerce platform with product listings, shopping cart, and secure checkout process.',
            technologies: ['React', 'Node.js', 'Stripe API', 'Tailwind CSS'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Portfolio Website',
            description: 'Designed a personal portfolio website showcasing various projects and blog posts.',
            technologies: ['Gatsby', 'GraphQL', 'Figma', 'CSS Grid'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Enterprise Software',
            description: 'Built an enterprise software solution to manage inventory, sales, and customer interactions for a growing business.',
            technologies: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: 'https://via.placeholder.com/30',  // Replace with LinkedIn icon URL
            href: 'https://linkedin.com/in/your-profile',
        },
        {
            name: 'Twitter',
            icon: 'https://via.placeholder.com/30',  // Replace with Twitter icon URL
            href: 'https://twitter.com/your-profile',
        },
        {
            name: 'GitHub',
            icon: 'https://via.placeholder.com/30',  // Replace with GitHub icon URL
            href: 'https://github.com/your-profile',
        },
    ];

    return (
        <div>
            <QuickNav />

            <HeroSection
                title="Elevate Your Online Presence"
                subtitle="Professional Web Development Services Tailored to Your Needs"
                backgroundImage={backgroundImg}
                ctaText="Get Started"
                ctaLink="/contact" // Update the link as necessary
            />

            <ServicesSection
                title="Web Development Services"
                services={webDevServices}
            />

            <TechnologiesSection
                title="Technologies We Use"
                technologies={technologies}
            />

            <PortfolioSection
                title="Our Successful Projects"
                projects={projects}
            />

            <AboutMe
                name="John Doe"
                bio="I am a passionate web developer with expertise in building high-performance applications. I have experience in full-stack development and enjoy creating user-friendly, responsive designs."
                profilePicture="https://via.placeholder.com/150"  // Replace with actual profile picture URL
                socialLinks={socialLinks}
            />

            <ContactUs />
        </div>


    );
};

export default WebDev;
