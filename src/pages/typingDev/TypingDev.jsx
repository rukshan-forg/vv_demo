// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../coman/HeroSection';
import backgroundImg from '../../assets/hireBg.jpg';
import ServicesSection from "../coman/Services.jsx";
import TechnologiesSection from "../coman/TechnologiesSection.jsx";
import PortfolioSection from "../coman/PortfolioSection.jsx";
import AboutMe from "../coman/AboutMe.jsx";
import ContactUs from "../coman/ContactUs.jsx";

const TypingDev = () => {

    const typingDevServices = [
        {
            name: 'Transcription Services',
            description: 'Accurate and fast transcription services for audio and video content.',
            details: [
                'Transcribing interviews, podcasts, and meetings',
                'Time-coded transcription available',
                'Support for multiple file formats',
                'Confidential and secure transcription',
            ]
        },
        {
            name: 'Document Formatting',
            description: 'Professional document formatting services to ensure your files are presentation-ready.',
            details: [
                'Creating visually appealing reports and documents',
                'Applying consistent styles and formatting',
                'Ensuring correct table of contents and headings',
                'Optimizing layout for readability and impact',
            ]
        },
        {
            name: 'Data Entry Services',
            description: 'Fast and accurate data entry services for various types of data processing needs.',
            details: [
                'Entering data from scanned documents or images',
                'Data organization and categorization',
                'Support for Excel, Word, and Google Sheets',
                'Data validation to ensure accuracy',
            ]
        },
        {
            name: 'Copy Typing',
            description: 'High-speed and accurate copy typing services for handwritten or printed documents.',
            details: [
                'Transcribing handwritten notes',
                'Typing from printed PDFs or documents',
                'Output in desired file format (Word, PDF, etc.)',
                'Ensuring no loss of detail or content',
            ]
        },
    ];

    const technologies = [
        {
            name: 'Microsoft Word',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Microsoft_Word_2013_logo.svg',
            description: 'A widely-used word processor for creating and formatting documents.',
        },
        {
            name: 'Google Docs',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Google_Docs_icon_%282014-2020%29.svg',
            description: 'A web-based word processing tool used for collaboration and creating documents in real time.',
        },
        {
            name: 'Microsoft Excel',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013_logo.svg',
            description: 'A spreadsheet program for organizing, analyzing, and visualizing data.',
        },
        {
            name: 'Google Sheets',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Sheets_logo_%282014-2020%29.svg',
            description: 'A web-based spreadsheet application for data organization and analysis.',
        },
    ];

    const projects = [
        {
            title: 'Business Document Formatting',
            description: 'Formatted a 50-page business report, ensuring consistent headers, footers, and layout across all pages.',
            technologies: ['Microsoft Word', 'Google Docs'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Transcription of Podcast Series',
            description: 'Provided transcription services for a series of podcast episodes, ensuring accurate time-coded text.',
            technologies: ['Google Docs', 'Microsoft Word'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Data Entry for Inventory Management',
            description: 'Entered and organized product data for a company’s inventory system, ensuring accuracy and completeness.',
            technologies: ['Microsoft Excel', 'Google Sheets'],
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
            name: 'Facebook',
            icon: 'https://via.placeholder.com/30',  // Replace with Facebook icon URL
            href: 'https://facebook.com/your-profile',
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
                title="Professional Typing and Data Entry Services"
                subtitle="Accurate and Efficient Typing Services to Meet Your Business Needs"
                backgroundImage={backgroundImg}
                ctaText="Get Started"
                ctaLink="/contact" // Update the link as necessary
            />

            <ServicesSection
                title="Typing and Data Entry Services"
                services={typingDevServices}
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
                bio="I specialize in providing fast, accurate typing and transcription services. With several years of experience, I ensure high-quality results with a keen eye for detail."
                profilePicture="https://via.placeholder.com/150"  // Replace with actual profile picture URL
                socialLinks={socialLinks}
            />

            <ContactUs />
        </div>
    );
};

export default TypingDev;
