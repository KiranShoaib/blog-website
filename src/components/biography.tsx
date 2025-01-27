import Image from "next/image";
import biography from "../../public/biography.jpg";


export default function Biography() {
  return (
    <section className="mx-auto max-w-[1200px] p-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Side: Image */}
        <div className="flex-1 w-full h-[300px] md:h-auto">
          <Image
            src={biography}
            alt="A Fashion Expert"
            layout="responsive"
            className="w-full h-auto object-cover "
          />
        </div>
        {/* Right Side: Text */}
        <div className="flex-1">
          <h3 className="text-[#4b0005] font-bold uppercase mb-2">Biography</h3>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            A Fashion Expert Born & Raised in Karachi
          </h2>
          <p className=" mb-4">
            I have always been captivated by the vibrant fashion scene. The city&#39;s rich cultural diversity has inspired my unique style and creativity. Through years of learning and observation, I&#39;ve honed my skills and become a trusted fashion expert in the industry
            
          </p>
          <p className="">
            My journey in fashion is deeply rooted in Karachi&#39;s local trends, global influences, and the constant evolution of personal expression. I embrace every opportunity to work with individuals and brands, offering advice, styling, and guidance to help them bring their fashion vision to life with confidence and style
          
          </p>
        </div>
      </div>
    </section>
  );
}




