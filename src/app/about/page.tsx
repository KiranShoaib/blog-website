import AboutPageHero from "@/components/Aboutpage-Hero";
import Biography from "@/components/biography";
import Collaborate from "@/components/collaborate";
import FeaturedOn from "@/components/Featured-On";
import Header from "@/components/Header";
import Story from "@/components/Story";

function About() {
    return(
        <div>
            <Header/>
            <AboutPageHero/>
            <Biography/>
            <FeaturedOn/>
            <Story/>
            <Collaborate/>
        </div>
    )
}

export default About