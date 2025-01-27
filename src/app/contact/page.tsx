import ContactForm from "@/components/Contact-Form";
import ContactPageHero from "@/components/ContactPage-Hero";
import FollowInstagram from "@/components/Follow-Instagram";
import Header from "@/components/Header";
import Subscription from "@/components/Subscription";

function Contact() {
    return(
        <div>
            <Header/>
            <ContactPageHero/>
            <div className="bg-[#fff8fc]">
            <ContactForm/>
            <Subscription/>
            <FollowInstagram/>
            </div>
        </div>
    )
}

export default Contact