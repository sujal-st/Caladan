import BlogGrid from "@/components/page_components/blogs/BlogGrid"
import RecentArticles from "@/components/page_components/blogs/RecentArticles"
import CTASection from "@/components/page_components/home/CTASection"
import getBlogs from "@/llib/api/getBlogs"


async function page() {
    const blogs = await getBlogs();
    return (
        <>
            <BlogGrid blogs={blogs}/>
            <RecentArticles blogs={blogs}/>
            <CTASection/>
        </>
    )
}

export default page
