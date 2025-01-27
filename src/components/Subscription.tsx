import Image from "next/image";
import subscribehero from "../../public/subscribehero.jpg";
import { Button } from "@/components/ui/button";

export default function Subscription() {
  return (
    <section className="w-full mx-auto max-w-[1200px] p-6 md:p-11 bg-[#4b0005] text-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-6">
        {/* Left Side - Content */}
        <div className="flex-1">
          <h2 className="lg:text-5xl sm:text-4xl text-2xl font-bold mb-4">Don&#39;t Miss Out on the Latest Fashion Trends!</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest updates, trends, and exclusive offers directly in your inbox.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 p-2 rounded text-black"
            />
            <Button
              type="submit"
              className="text-white bg-[#ff4d6d] hover:bg-[#c9184a] transition-all duration-300 font-bold py-2 px-6 rounded w-[193px] h-[44px] sm:w-[182px]"
            >
              Subscribe
            </Button>
          </form>
        </div>
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={subscribehero}
            alt="Latest Fashion Trends"
            layout="responsive" // Responsive layout
            width={500} // Define an aspect ratio (e.g., 500 x 500)
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
