import Image from 'next/image';
import contact from "../../public/contact.jpg";
import { Button } from "@/components/ui/button";


export default function ContactForm() {
  return (
    <section className=" mx-auto max-w-[1200px] p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Left Side - Form */}
      <div>
        <h2 className="txt-2xl md:text-5xl font-bold mb-4">Let&#39;s Get In Touch</h2>
        <p className="mb-6">
          Feel free to reach out for any inquiries!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-bold text-[#262526]">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full border border-[#4b0005] p-2 rounded bg-[#fff8fc]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold text-[#262526]">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border border-[#4b0005] p-2 rounded bg-[#fff8fc]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold text-[#262526]">Message:</label>
            <textarea
              id="message"
              className="w-full border border-[#4b0005] p-2 rounded placeholder:bg-[#fff8fc]"
              placeholder="Write your message"
              rows={4}
            ></textarea>
          </div>
          <Button
            type="submit"
            className="text-white text-lg bg-[#ff4d6d] hover:bg-[#c9184a] transition-all duration-300 font-bold w-[193px] h-[44px] mt-6 sm:text-xl sm:w-[182px]"
          >
            Submit
          </Button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div>
        <Image
          src={contact}
          alt="Contact"
          className="md:py-11 md:px-11"
        />
      </div>
    </section>
  );
}



