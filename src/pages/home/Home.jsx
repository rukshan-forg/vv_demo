import HeroSection from "../../component/HeroSection.jsx";
import WebDevelopmentSection from "../../component/WebDevSection.jsx";
import GraphicsDesignSection from "../../component/GraphicsDesignSection.jsx";
import TypingServicesSection from "../../component/TypingServicesSection.jsx";
import Testimonials from "../../component/Testimonials.jsx";
import OurTeam from "../../component/OverTeam.jsx";
import ArtServicesSection from "../../component/ArtServicesSection.jsx";
import Footer from "../../component/footer.jsx";


function Home() {
    return (
        <>
            <HeroSection/>

            <div className="-mt-16"><WebDevelopmentSection/></div>
            <div className="mt-12"><GraphicsDesignSection/></div>
            <div className="mt-12"><TypingServicesSection/></div>
            <div className="mt-12"><ArtServicesSection /></div>

            <div className="mt-12"><Testimonials/></div>
            <div className="mt-12"><OurTeam/></div>

            <Footer />



        </>
    );
}

export default Home;
