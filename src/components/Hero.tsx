import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroimg1 from "../../public/heroimg1.jpg";
import heroimg2 from "../../public/heroimg2.jpg";
import heroimg3 from "../../public/heroimg3.jpg";


const Hero = () => {
  return (
    <section
      className="w-full mx-auto p-4 relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#4b0005] opacity-85"></div>

      {/* Content Layer */}
      <div className="relative top-20 md:top-32 z-10 text-center text-white py-12 flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold  mb-4">
          Unveiling All the Latest Fashion Trends
        </h1>
        <p className="text-base md:text-lg mb-6 text-center max-w-2xl">
          Welcome to Kiran, your ultimate destination for the latest fashion
          trends, style inspiration, and expert advice. From seasonal
          collections to timeless classics, we bring you all things chic and
          stylish. Stay ahead of the curve and explore our blog for exclusive
          insights into the world of fashion.
        </p>
        <Button className="text-lg bg-[#ff4d6d] hover:bg-[#c9184a] transition-all duration-300 w-[193px] h-[44px] mt-6 sm:text-xl sm:w-[182px] text-white font-bold px-6 py-2">
          Browse Posts
        </Button>
      </div>

      {/* Images Section */}
      <div className="relative top-20 md:top-40 z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <Image
            src={heroimg1}
            alt="Fashion 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden md:-translate-y-10">
          <Image
            src={heroimg2}
            alt="Fashion 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            src={heroimg3}
            alt="Fashion 3"
            className="w-full h-auto object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
