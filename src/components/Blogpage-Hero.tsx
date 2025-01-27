const BlogPageHero = () => {
    return (
      <section
        className="w-full min-h-[40vh] md:min-h-[50vh] relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/blogpagehero.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#4b0005] opacity-85"></div>
  
        {/* Content */}
        <div className="relative top-12 md:top-24 z-10 text-white py-12 px-4 max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold">Blog</h2>
        </div>
      </section>
    );
  };
  
export default BlogPageHero;