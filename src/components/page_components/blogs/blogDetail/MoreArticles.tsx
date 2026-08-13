import HeadingText from "@/components/common/HeadingText";
import { blogs } from "@/components/constants/data";
import { BlogArticleCard } from "../RecentArticles";



function MoreArticles({slug}:{slug:string}) {

    const recommendBlogs=blogs.filter((blog)=>blog.slug!=slug).slice(0,3);

    return (
        <section className="pt-6 pb-16 px-4 md:px-8 md:pt-8 mb:pb-30">
            <div className="container mx-auto">
                <div className="mb-12 border-t border-gray-300"></div>


                <div className="mt-5 mb-8">
                    <HeadingText block1="Recent" block2="Articles" align="text-left" />
                </div>


                {/* card */}
                <div className="grid grid-cols-1 self-start md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 md:gap-x-4 md:gap-y-12">
                    {recommendBlogs.map((blog) => (
                        <BlogArticleCard key={blog.id} blog={blog}/>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default MoreArticles;