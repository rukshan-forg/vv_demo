import useScrollAnimation from "./ScrollAnimation";


export default function TestimonialsSection() {

    const [ref, isVisible] = useScrollAnimation();

    const testimonials = [
        {
            name: "John Doe",
            position: "CEO at CompanyX",
            testimony: "The services provided were exceptional. Our website is now faster, more responsive, and has an amazing design. We highly recommend them!",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            category: "Web Development",
        },
        {
            name: "Jane Smith",
            position: "Marketing Head at BrandY",
            testimony: "Their creativity and dedication to detail blew us away. The art pieces delivered were stunning and far beyond our expectations.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            category: "Art",
        },
        {
            name: "Sam Wilson",
            position: "Freelancer",
            testimony: "I am thoroughly impressed with the quality of work. From web development to design, everything was top-notch.",
            image: "https://randomuser.me/api/portraits/men/76.jpg",
            category: "Graphics Design",
        },
    ];

    return (
        <section id="testimonials" className=" py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={'bg-white p-6 rounded-lg shadow-lg ' + (isVisible ? 'animate-fadeInUp' : 'opacity-0')} ref={ref}>
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                    <p className="text-sm text-blue-500">{testimonial.category}</p>
                                </div>
                            </div>
                            <p className="text-gray-600">{testimonial.testimony}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
