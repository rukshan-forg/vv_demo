// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../coman/HeroSection';
import backgroundImg from '../../assets/hireBg.jpg';
import ServicesSection from "../coman/Services.jsx";
import TechnologiesSection from "../coman/TechnologiesSection.jsx";
import PortfolioSection from "../coman/PortfolioSection.jsx";
import AboutMe from "../coman/AboutMe.jsx";
import ContactUs from "../coman/ContactUs.jsx";

const GraphicsDev = () => {

    const graphicsDevServices = [
        {
            name: 'Logo Design',
            description: 'Creating unique, memorable logos that capture your brand identity.',
            details: [
                'Custom logo designs',
                'Brand identity integration',
                'Multiple revisions',
                'Vector formats available',
            ]
        },
        {
            name: 'Business Card Design',
            description: 'Professional business card designs that leave a lasting impression.',
            details: [
                'Custom designs tailored to your brand',
                'Print-ready files',
                'Multiple layouts and styles',
                'High-quality designs',
            ]
        },
        {
            name: 'Social Media Design',
            description: 'Visually engaging social media designs to boost your online presence.',
            details: [
                'Custom social media banners',
                'Post templates for consistent branding',
                'Story templates',
                'Responsive designs for different platforms',
            ]
        },
        {
            name: 'Print Design',
            description: 'Designs for print marketing materials like brochures, flyers, and posters.',
            details: [
                'Brochure design',
                'Flyer design',
                'Poster design',
                'Print-ready formats',
            ]
        },
    ];

    const technologies = [
        {
            name: 'Adobe Illustrator',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
            description: 'Industry-standard vector graphics software for logo design, icons, and illustrations.',
        },
        {
            name: 'Adobe Photoshop',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png',
            description: 'Photo editing and graphic design software for manipulating images and designing creative content.',
        },
        {
            name: 'Figma',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            description: 'A web-based design tool used for designing interfaces, graphics, and more with real-time collaboration.',
        },
        {
            name: 'InDesign',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg',
            description: 'Professional desktop publishing software for creating brochures, posters, and digital publications.',
        },
    ];

    const projects = [
        {
            title: 'Brand Identity Package',
            description: 'Created a cohesive brand identity package for a startup, including logo, business cards, and social media templates.',
            technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Social Media Campaign',
            description: 'Designed graphics for a month-long social media campaign for a fashion brand, including post templates and story highlights.',
            technologies: ['Adobe Photoshop', 'Figma'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Business Card Design',
            description: 'Crafted a unique business card design for a creative agency, incorporating the brand colors and aesthetic.',
            technologies: ['Adobe Illustrator', 'Adobe InDesign'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
    ];

    const socialLinks = [
        {
            name: 'Dribbble',
            icon: 'https://via.placeholder.com/30',  // Replace with Dribbble icon URL
            href: 'https://dribbble.com/your-profile',
        },
        {
            name: 'Behance',
            icon: 'https://via.placeholder.com/30',  // Replace with Behance icon URL
            href: 'https://www.behance.net/your-profile',
        },
        {
            name: 'Instagram',
            icon: 'https://via.placeholder.com/30',  // Replace with Instagram icon URL
            href: 'https://instagram.com/your-profile',
        },
    ];

    return (
        <div>
            <HeroSection
                title="Transform Your Brand Visually"
                subtitle="Professional Graphic Design Services to Elevate Your Brand"
                backgroundImage={backgroundImg}
                ctaText="Contact Us"
                ctaLink="/contact" // Update the link as necessary
            />

            <ServicesSection
                title="Graphic Design Services"
                services={graphicsDevServices}
            />

            <TechnologiesSection
                title="Design Tools We Use"
                technologies={technologies}
            />

            <PortfolioSection
                title="Our Graphic Design Portfolio"
                projects={projects}
            />

            <AboutMe
                name="Jane Doe"
                bio="I am a graphic designer with over 5 years of experience in creating visual identities, marketing materials, and more. I have a keen eye for detail and a passion for design that drives my creativity."
                profilePicture="https://via.placeholder.com/150"  // Replace with actual profile picture URL
                socialLinks={socialLinks}
            />

            <ContactUs />
        </div>
    );
};

export default GraphicsDev;
