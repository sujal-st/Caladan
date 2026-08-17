import BlogDetailSection from "@/components/page_components/blogs/blogDetail/BlogDetailSection";
import CommonSection from "@/components/page_components/blogs/blogDetail/CommonSection";
import MoreArticles from "@/components/page_components/blogs/blogDetail/MoreArticles";
import getBlog from "@/llib/api/getSingleBlog";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export async function generateStaticParams(){
    const slugs = await client.fetch(`*[_type == 'blog']{"slug": slug.current}`);
    return slugs.map((s:any)=>({slug: s.slug}))
}

async function blogDetailsPage({ params }: PageProps<'/blogs/[slug]'>) {
    const {slug}= await params;
    const blog=await getBlog(slug);

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
