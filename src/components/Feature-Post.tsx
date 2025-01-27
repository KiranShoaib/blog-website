import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Your Guide to Look Stunning in Winter Clothes",
    slug: "winter-clothes-guide",
    image: "/blog1.jpg",
    description:
      "Winter is the perfect season to showcase your fashion sense while staying warm and cozy. Layering is key to achieving a stunning winter look—pair a chic wool coat with a stylish scarf and boots to elevate your outfit. Don’t shy away from bold colors or patterns; they can add a touch of vibrancy to dull winter days. Accessories like gloves, hats, and statement jewelry can complete your look while also serving a practical purpose. Invest in quality materials like cashmere, wool, and faux fur to ensure both comfort and style throughout the season.",
  },
  {
    title: "Best Looking Sunglasses of 2025 based on your type",
    slug: "best-sunglasses-2025",
    image: "/blog2.jpg",
    description:
      "Finding the perfect sunglasses is all about matching your style and face shape. In 2025, oversized frames and retro-inspired designs are leading the trends. Round faces can shine with angular or cat-eye frames, while square faces benefit from round or oval styles to soften their features. Aviators and rectangular frames remain timeless for heart-shaped and oval faces. Vibrant colors and gradient lenses are also in style, offering a bold touch to any outfit. Choose sunglasses that not only enhance your look but also provide proper UV protection for your eyes.",
  },
  {
    title: "Fall Clothes to look for when shopping",
    slug: "fall-clothes-shopping",
    image: "/blog3.jpg",
    description: "As the seasons change, fall brings with it the perfect opportunity to refresh your wardrobe with cozy and stylish outfits. Look for warm, layered clothing made from soft fabrics like wool, cashmere, and flannel. Opt for neutral tones and earthy shades that pair well with the season's vibrant hues. Don’t forget essentials like oversized sweaters, tailored trench coats, and versatile scarves that can elevate your everyday look. Comfortable ankle boots and stylish cardigans are also must-haves for a chic yet practical fall ensemble. Focus on layering to stay both warm and fashionable as temperatures fluctuate throughout the day.",
  },
];

function FeaturePost() {
    return (
      <div className="bg-[#fff8fc]">
        <section className="max-w-[1200px] w-full mx-auto pb-12 pt-14 md:pt-48">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Feature Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md  overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{blog.title}</h3>
                  <p className="text-sm my-2 line-clamp-3">
                    {blog.description}
                  </p>
                  {/* Dynamic Link to Blog Page */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[#ff4d6d] hover:text-[#c9184a] font-bold hover:underline text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
      );
}

export default FeaturePost