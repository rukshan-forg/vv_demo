// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../coman/HeroSection';
import backgroundImg from '../../assets/hireBg.jpg';
import ServicesSection from "../coman/Services.jsx";
import TechnologiesSection from "../coman/TechnologiesSection.jsx";
import PortfolioSection from "../coman/PortfolioSection.jsx";
import AboutMe from "../coman/AboutMe.jsx";
import ContactUs from "../coman/ContactUs.jsx";
import QuickNav from "../coman/QuickNav.jsx";

const ArtDev = () => {

    const artDevServices = [
        {
            name: 'Graphic Design',
            description: 'Creating eye-catching and unique visual designs for branding, advertising, and digital media.',
            details: [
                'Logo design and brand identity',
                'Print design (brochures, flyers, posters)',
                'Digital design (social media, web banners)',
                'Illustrations and custom artwork',
                'Typography and layout design',
            ]
        },
        {
            name: 'Pencil Art & Illustrations',
            description: 'Professional pencil art and hand-drawn illustrations tailored to your creative projects.',
            details: [
                'Realistic pencil portraits',
                'Hand-drawn illustrations for books and media',
                'Customized pencil sketches',
                'High-detail shading and line work',
                'Concept art and character design',
            ]
        },
        {
            name: 'Vector Art',
            description: 'Clean and scalable vector illustrations perfect for digital and print media.',
            details: [
                'Logo design and icon creation',
                'Custom vector illustrations',
                'Scalable for any media size',
                'Perfect for print and web',
                'Editable in Adobe Illustrator or similar tools',
            ]
        },
        {
            name: 'Coming Soon',
            description: 'New services related to art and design will be available soon!',
            details: [],
        }
    ];

    const technologies = [
        {
            name: 'Adobe Illustrator',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
            description: 'A vector graphics editor used for creating logos, icons, drawings, typography, and illustrations.',
        },
        {
            name: 'Adobe Photoshop',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
            description: 'A powerful tool for photo editing and creating pixel-based art and designs.',
        },
        {
            name: 'Figma',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
            description: 'A web-based interface design tool used for real-time collaboration in design projects.',
        },
        {
            name: 'Procreate',
            logo: 'https://upload.wikimedia.org/wikipedia/en/5/51/Procreate_app_icon.png',
            description: 'A popular drawing and illustration app for digital artists using iPad.',
        },
    ];

    const projects = [
        {
            title: 'Custom Logo Design',
            description: 'Designed a custom logo for a startup company, ensuring brand consistency and scalability for all platforms.',
            technologies: ['Adobe Illustrator', 'Figma'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Book Illustrations',
            description: 'Created a series of hand-drawn illustrations for a children’s book, bringing characters and stories to life.',
            technologies: ['Procreate', 'Adobe Photoshop'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
        {
            title: 'Vector Art for Marketing Campaign',
            description: 'Developed scalable vector art for a marketing campaign, including icons, illustrations, and social media content.',
            technologies: ['Adobe Illustrator', 'Figma'],
            image: 'https://via.placeholder.com/400x300',  // Replace with real image
            link: '#',  // Link to case study or project
        },
    ];

    const socialLinks = [
        {
            name: 'Behance',
            icon: 'https://via.placeholder.com/30',  // Replace with Behance icon URL
            href: 'https://behance.net/your-profile',
        },
        {
            name: 'Instagram',
            icon: 'https://via.placeholder.com/30',  // Replace with Instagram icon URL
            href: 'https://instagram.com/your-profile',
        },
        {
            name: 'Dribbble',
            icon: 'https://via.placeholder.com/30',  // Replace with Dribbble icon URL
            href: 'https://dribbble.com/your-profile',
        },
    ];

    return (
        <div>
            <QuickNav />

            <HeroSection
                title="Creative Art & Design Services"
                subtitle="Bring your visions to life with stunning artwork and modern graphic design."
                backgroundImage={backgroundImg}
                ctaText="View Portfolio"
                ctaLink="/portfolio" // Update the link as necessary
            />

            <ServicesSection
                title="Art & Design Services"
                services={artDevServices}
            />

            <TechnologiesSection
                title="Technologies We Use"
                technologies={technologies}
            />

            <PortfolioSection
                title="Our Artistic Creations"
                projects={projects}
                seeMore={"/art/projects"}/>

            <AboutMe
                name="Jane Doe"
                bio="A passionate artist and designer, I specialize in creating unique and meaningful designs that capture the essence of your brand. Whether it's hand-drawn illustrations or professional digital design, I’m here to bring your ideas to life."
                profilePicture="https://via.placeholder.com/150"  // Replace with actual profile picture URL
                socialLinks={socialLinks}
            />

            <ContactUs />
        </div>
    );
};

export default ArtDev;
