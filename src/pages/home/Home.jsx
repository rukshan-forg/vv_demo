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

            <div><WebDevelopmentSection/></div>
            <div><GraphicsDesignSection/></div>
            <div><TypingServicesSection/></div>
            <div><ArtServicesSection /></div>

            <div><Testimonials/></div>
            <div><OurTeam/></div>

            <Footer />



        </>
    );
}

export default Home;
