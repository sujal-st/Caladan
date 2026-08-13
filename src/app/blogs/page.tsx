import BlogGrid from "@/components/page_components/blogs/BlogGrid"
import RecentArticles from "@/components/page_components/blogs/RecentArticles"
import CTASection from "@/components/page_components/home/CTASection"


function page() {
    return (
        <>
            <BlogGrid/>
            <RecentArticles/>
            <CTASection/>
        </>
    )
}

export default page
