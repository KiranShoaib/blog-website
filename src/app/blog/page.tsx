import BlogPage from "@/components/Blog-Page";
import BlogPageHero from "@/components/Blogpage-Hero";
import Header from "@/components/Header";

function Blog() {
    return (
        <div>
            <Header/>
            <BlogPageHero/>
            <BlogPage/>
        </div>
    )
}

export default Blog