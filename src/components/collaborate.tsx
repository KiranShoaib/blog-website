import { Button } from "@/components/ui/button";

export default function Collaborate() {
  return (
    <section
      className="mx-auto max-w-[1200px] mb-10 p-6 md:p-11 text-white bg-cover bg-center flex flex-col items-center text-center relative"
      style={{ backgroundImage: "url('/collaborate.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#4b0005] opacity-85"></div>
        
      <div className="relative">
      <h2 className="text-2xl md:text-5xl font-bold mb-4">Let&#39;s Collaborate</h2>
      <p className="mb-6 max-w-[600px]">
        Let&#39;s team up to create trendsetting stories and campaigns. Whether you&#39;re a brand, influencer, or creative, together we can inspire, innovate, and redefine the fashion landscape with bold and unique collaborations.
      </p>
      <Button
       className="text-lg bg-[#ff4d6d] hover:bg-[#c9184a] transition-all duration-300 w-[193px] h-[44px] sm:text-xl sm:w-[182px] text-white font-bold px-6 py-2"
      >
        Contact Me
      </Button>
      </div>
    </section>
  );
}