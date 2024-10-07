
export default function HeroSection() {
    return (
        <section className="relative bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center">
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-font-HEADER">
                    Build Your Vision with <span className="text-primary">VisualVerse</span>
                </h1>
                <p className="mt-4  md:text-xl max-w-2xl mx-auto font-medium text-font-PARAGRAPH">
                    Transform your ideas into reality with our cutting-edge solutions in web development, graphic design, typography, and Pencil Art.
                </p>
                <div className="mt-8 flex justify-center flex-col md:flex-row">
                    <a
                        href="/get-started"
                        className="px-8 py-3 mx-3 my-3 bg-primary text-white rounded-md text-lg font-medium shadow-lg hover:bg-opacity-90 transition"
                    >
                        Get Started
                    </a>
                    <a
                        href="/learn-more"
                        className="px-8 py-3 mx-3 my-3 bg-white text-primary rounded-md text-lg font-medium shadow-lg hover:bg-gray-100 transition"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
