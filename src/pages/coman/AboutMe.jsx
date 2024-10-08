// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ name, bio, profilePicture, socialLinks }) => {
    return (
        <section id="about-me" className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Profile Picture */}
                    <div className="w-40 h-40 mb-6 lg:mb-0 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-blue-600">
                        <img
                            src={profilePicture}
                            alt={`${name}'s Profile`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* About Text */}
                    <div className="lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                            {name}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            {bio}
                        </p>

                        {/* Social Media Links */}
                        <div className="flex justify-center lg:justify-start space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt={link.name} className="w-8 h-8 hover:opacity-75 transition" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutMe.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired, // URL of the profile picture
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,  // URL of the icon
            href: PropTypes.string.isRequired,  // Social media profile link
        })
    ).isRequired,
};

export default AboutMe;
