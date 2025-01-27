import Image from "next/image";

export default function FollowInstagram() {
  const images = [
    "/instagram1.jpg",
    "/instagram2.jpg",
    "/instagram3.jpg",
    "/instagram4.jpg",
    "/instagram5.jpg",
    "/instagram6.jpg",
    
  ];

  return (
    <section className=" mx-auto max-w-[1200px] py-14 ">
      <h2 className="text-center md:text-5xl text-2xl font-bold  mb-10">Follow Me On Instagram</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[1/1]">
            <Image
              src={src}
              alt={`Instagram image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}


