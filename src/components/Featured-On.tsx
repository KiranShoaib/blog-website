import Image from "next/image";

export default function FeaturedOn() {
  const logos = [
    '/zara.png',
    '/theblonde.png',
    '/hm.png',
    '/harpersbazaar.png',
    '/chiaraferragni.png',
  ];

  return (
    <section className="w-full bg-[#ff4d6d] py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] w-full text-center">
        <h2 className="text-white text-lg font-bold mb-10">Featured On</h2>
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-32">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-12 flex justify-center items-center text-sm font-medium"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={128}  
                height={48} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  