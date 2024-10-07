import useScrollAnimation from "./ScrollAnimation";

export default function OurTeam() {

    const [ref, isVisible] = useScrollAnimation();

    const teamMembers = [
        {
            name: "Rukshan Prog",
            role: "Full Stack Developer",
            bio: "Rukshan is a full-stack developer specializing in modern web technologies. He leads the development team with a focus on delivering high-quality, scalable solutions.",
            image: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        },
        {
            name: "Name",
            role: "Graphic Designer",
            bio: "Jane is a talented graphic designer who brings our ideas to life with her creativity and attention to detail.",
            image: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder image
        },
        {
            name: "Name",
            role: "Art Specialist",
            bio: "John is an expert in pencil art and brings a unique perspective to our creative projects.",
            image: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder image
        },
        {
            name: "Name",
            role: "Content Writer",
            bio: "Emma handles all content-related tasks, ensuring our clients' messaging is clear and impactful.",
            image: "https://randomuser.me/api/portraits/women/76.jpg", // Placeholder image
        },
        {
            name: "Name",
            role: "Content Writer",
            bio: "Emma handles all content-related tasks, ensuring our clients' messaging is clear and impactful.",
            image: "https://randomuser.me/api/portraits/women/76.jpg", // Placeholder image
        },
    ];

    return (
        <section className="bg-gray-50 py-16" id="our-team">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={'bg-white p-6 rounded-lg shadow-lg ' + (isVisible ? 'animate-fadeInUp' : 'opacity-0')} ref={ref}>
                            <img
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-sm text-blue-500">{member.role}</p>
                            <p className="mt-2 text-gray-600">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
