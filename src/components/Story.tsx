import Image from "next/image";
import story from "../../public/story.jpg"; 

const Story = () => {
  return (
    <div className="bg-[#fff8fc]">
    <section className="w-full max-w-[1200px] mx-auto p-6">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=" md:py-16">
        <h3 className="text-xl font-bold text-[#4b0005] ">My Story</h3>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          From Fashion Faux Pas to Fabulous
        </h2>
      </div>

      {/* Content Section */}
        {/* Text Section */}
        <div className="mb-10 md:mb-0 md:py-16">
          <p className="text-lg mb-4">
            Fashion mistakes can happen to anyone, whether it&#39;s wearing clashing colors or over-accessorizing. 
            But every faux pas is a learning opportunity to find what truly fits your style.
          </p>
          <p className="text-lg">
            Turning those fashion blunders into a fabulous look is simple: invest in timeless pieces and experiment with what makes you feel confident and stylish. Embrace your personal style journey! 
          </p>
        </div>
      </div>

        {/* Image Section */}
        <div className="overflow-hidden">
          <Image
            src={story}
            alt="Fashion Story"
            className="w-full h-auto object-cover"
          />
        </div>
    </section>
    </div>
  );
};

export default Story;




