import AboutHero from "@/components/About-Hero";
import AfterSubscribe from "@/components/After-Subscribe";
import Collaborate from "@/components/collaborate";
import FeaturePost from "@/components/Feature-Post";
import FollowInstagram from "@/components/Follow-Instagram";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlog from "@/components/Latest-Blog";
import Subscription from "@/components/Subscription";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturePost/>
      <AboutHero/>
      <Subscription/>
      <AfterSubscribe/>
      <LatestBlog/>
      <FollowInstagram/>
      <Collaborate/>
    </div>
  );
}
