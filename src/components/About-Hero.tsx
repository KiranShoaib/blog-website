import Image from "next/image";
import abouthero1 from "../../public/abouthero1.jpg";
import abouthero2 from "../../public/abouthero2.jpg";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 p-4 space-y-11  md:space-y-0 my-14 md:my-20">
      {/* Left Images Section */}
      <div className="flex flex-1 flex-row gap-4">
        <div className="flex-1">
          <Image
            src={abouthero1}
            alt="Fashion Model 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1">
          <Image
            src={abouthero2}
            alt="Fashion Model 2"
            className="w-full h-auto object-cover translate-y-12 "
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          I&#39;m Kiran Shoaib, a Fashion Expert and a Professional Writer
        </h1>
        <p className="mt-4 text-gray-700">
          I&#39;m passionate about bringing you the best of the industry. Our
          team is dedicated to delivering top-quality services, helping you
          stay ahead in a rapidly changing world.
        </p>
        <Button
          className="mt-6 text-white bg-[#ff4d6d] hover:bg-[#c9184a] transition-all duration-300 font-bold 
        py-2 px-6 w-[193px] h-[44px] sm:w-[182px]"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default AboutHero;
