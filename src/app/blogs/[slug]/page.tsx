import { blogs } from "@/components/constants/data";
import BlogDetailSection from "@/components/page_components/blogs/blogDetail/BlogDetailSection";
import CommonSection from "@/components/page_components/blogs/blogDetail/CommonSection";
import MoreArticles from "@/components/page_components/blogs/blogDetail/MoreArticles";
import { notFound } from "next/navigation";

async function blogDetailsPage({ params }: PageProps<'/blogs/[slug]'>) {
    const {slug}= await params;
    const blog=blogs.find((blog)=>blog.slug===slug);

    if(!blog){
        notFound();
    }
    return (
        <>
            <BlogDetailSection blog={blog}/>
            <CommonSection/>
            <MoreArticles slug={slug}/> 
        </>
    )
}

export default blogDetailsPage
