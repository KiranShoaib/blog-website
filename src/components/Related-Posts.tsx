import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const RelatedPosts = ({ currentSlug, posts }: { currentSlug: string; posts: Post[] }) => {
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const relatedPosts = [
    posts[currentIndex - 1] || null,
    posts[currentIndex + 1] || null,
  ].filter(Boolean);

  return (
    <div className="mt-16 max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded overflow-hidden hover:shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm">{post.description.slice(0, 50)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
