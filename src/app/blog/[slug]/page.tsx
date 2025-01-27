import React from 'react';
import Link from 'next/link';
import RelatedPosts from '@/components/Related-Posts';
import Image from 'next/image';
import BlogHeader from '@/components/Blog-Header';
import CommentSection from '@/components/Comment-Section';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

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
        {
          title: "2025 Fashion trends summary guide",
          slug: "fashion-summary-guide",
          image: "/blog4.jpg",
          description: "Fashion in 2025 embraces a blend of sustainability and innovation, with bold statements and minimalist elegance defining the year’s trends. From vibrant color palettes inspired by nature to gender-neutral designs that prioritize inclusivity, this year’s fashion highlights individuality and self-expression. Designers are focusing on using eco-friendly materials, with recycled fabrics and ethical production processes at the forefront. Oversized silhouettes, sleek tailoring, and layered textures create versatile looks suitable for both casual and formal occasions. Accessories play a key role, featuring chunky jewelry, futuristic sunglasses, and statement bags. In essence, 2025 is all about merging style with purpose, celebrating creativity in every detail.",
        },
        {
          title: "How to choose the right bag for your outfit",
          slug: "choose-right-bag",
          image: "/blog5.jpg",
          description: "Selecting the perfect bag to complement your outfit is an art that combines style and practicality. Start by considering the occasion—formal events often call for sleek clutches or structured handbags, while casual outings pair well with crossbody or tote bags. Pay attention to the colors and patterns of your outfit; neutral-toned bags are versatile, while bold designs can add a statement. Match the material of your bag to your attire; leather bags exude elegance, while canvas or fabric bags lean towards a relaxed vibe. Lastly, ensure the size of the bag aligns with your needs—choose a compact bag for essentials or a larger one for daily carry.",
        },
        {
          title: "Guide to matching outfit colors and style",
          slug: "guide-matching-outfit",
          image: "/blog6.jpg",
          description: "Choosing the perfect outfit is not just about the pieces of clothing you wear but how you pair them together. Matching colors and styles can elevate your look, making it both fashionable and cohesive. Start by understanding the basics of the color wheel and combining complementary or analogous colors. Neutral tones are always a safe option to balance vibrant hues. Additionally, consider your personal style and the occasion. Accessories, textures, and patterns can add depth to your outfit, but they should harmonize rather than compete for attention. With a little creativity and attention to detail, you can create a stunning and stylish ensemble every time.",
        },
        {
          title: "Why Minimal Makeup is the New Trend",
          slug: "minimal-makeup-trend",
          image: "/blog7.jpg",
          description: "In recent years, minimal makeup has become a major trend in the beauty industry, focusing on natural beauty rather than heavy, layered products. This trend emphasizes enhancing one's features with just a few key products, such as a lightweight foundation, subtle highlighter, and a neutral lip color. The appeal lies in its simplicity, offering a fresh and effortless look that suits both everyday wear and special occasions. Minimal makeup also aligns with the growing preference for skincare and self-care, allowing individuals to feel confident while embracing their natural beauty. As people prioritize comfort and ease, this trend continues to gain momentum, making it a timeless and versatile approach to beauty.",
        },
        {
          title: "How to Choose the Perfect Dress for Going Out",
          slug: "outgoing-perfect-dress",
          image: "/blog8.jpg",
          description: "Choosing the perfect dress for going out can be a fun yet challenging task. It's important to consider the occasion, your body type, and your personal style when picking the right outfit. For a casual outing, you might opt for something comfortable yet stylish, like a flowy dress or a sleek jumpsuit. On the other hand, for a formal event, a well-tailored gown or a chic cocktail dress could be ideal. Don’t forget to accessorize appropriately and choose footwear that complements your outfit while ensuring you feel confident and comfortable. Remember, the perfect dress is the one that makes you feel your best!",
        },
        {
          title: "Your Full Makeup Guide for Beginners",
          slug: "beginners-makeup-guide",
          image: "/blog9.jpg",
          description: "If you're just starting your makeup journey, this comprehensive guide will help you navigate the basics of applying makeup. From understanding your skin type to choosing the right products, we'll walk you through each step, including how to apply foundation, contour, eyeshadow, and lipstick. With the right tools and techniques, you'll learn how to create flawless looks, whether you're going for a natural daytime style or something more glamorous for the evening. This guide is perfect for beginners who want to build their confidence and master makeup effortlessly.",
        },
    
  ];

  const currentPostIndex = blogs.findIndex((post) => post.slug === slug);
  const previousPost = blogs[currentPostIndex - 1] || null;
  const nextPost = blogs[currentPostIndex + 1] || null;
  const currentPost = blogs[currentPostIndex];

  if (!currentPost) return <div>Post not found</div>;

  return (
    <div>
      <BlogHeader/>
    <div className="max-w-[800px] w-full mx-auto p-4 mt-20">
      {/* Post Image and Title */}
      <div className="bg-[#fff8fc] p-10">
        <Image 
        src={currentPost.image} 
        alt={currentPost.title} 
        width={800}
        height={400}
        />
        <h1 className="text-3xl font-bold  mt-4 p-2">
          {currentPost.title}
        </h1>
      </div>

      {/* Post Content */}
      <p className="mt-16 font-semibold">{currentPost.description}</p>

      {/* Navigation Links */}
      <div className="flex justify-between items-center mt-16 ">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="font-semibold hover:underline">
            ← Previous Post
          </Link>
        ) : (
          <span />
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="font-semibold hover:underline">
            Next Post →
          </Link>
        ) : (
          <span />
        )}
      </div>

      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} posts={blogs} />
      <CommentSection/>
    </div>
    </div>
  );
}