'use client'
import HeadingText from "@/components/common/HeadingText"
import TitlePill from "@/components/common/TitlePill"
import Image from "next/image";
import { BlogCardProps } from "./BlogGrid";
import Link from "next/link";
import { useRef } from "react";
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import {gsap,useGSAP} from '@/llib/gsap';
import type { blog } from "@/components/constants/types";
import getBlogs from "@/llib/api/getBlogs";
import { urlFor } from "@/sanity/lib/image";

export function BlogArticleCard({ blog }: BlogCardProps) {
    return (
        <Link href={`/blogs/${blog.slug}`} className="flex flex-col gap-3">
            <div className="relative h-80 rounded-lg overflow-hidden img-container">
                <div className="absolute inset-0 z-2 left-3 top-3">
                    <TitlePill label="tahiti insider" />
                </div>
                <Image src={urlFor(blog.img).width(800).height(600).url()} alt={blog.title} sizes="(max-width:767px) 344px, (max-width:1023px) 309px" fill className="object-cover image" loading={`${blog.slug==='best-honeymoon-packages-in-tahiti'?"eager":'lazy'}`} />
            </div>

            <div className="flex flex-col gap-3">
                <div className='flex items-center leading-5 text-base text-prim-btn/60 md:leading-6'>
                    <div>
                        {blog.date}
                    </div>
                    <div>
                        <pre> | </pre>
                    </div>
                    <div>
                        {blog.time}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className='text-prim-btn leading-5 text-[20px] line-clamp-1 md:leading-7 md:text-[24px]'>{blog.title}</div>
                    <div className='leading-5 text-base text-prim-btn/60 line-clamp-2 md:leading-6'>{blog.subtitle}</div>
                </div>
            </div>
        </Link>
    )
}

function RecentArticles({blogs}:{blogs:blog[]}) {
    const sectionRef= useRef<HTMLElement|null>(null);
    const titleRef=useRef<HTMLDivElement|null>(null);

    useTitleAnimation(titleRef,'.container',sectionRef);


    useGSAP(()=>{
        const image=gsap.utils.toArray<HTMLImageElement>('.image');
        image.forEach((i)=>{
            gsap.set(i,{scale:1.5});

            gsap.to(i,{
                yPercent: 15,
                scrollTrigger:{
                    trigger:'.img-container',
                    start:'top top',
                    scrub: true
                }
            })
        })
    })
    return (
        <section className="pt-6 pb-16 px-4 md:px-8 md:pt-8 mb:pb-30" ref={sectionRef}>
            <div className="container mx-auto">
                <div className="mb-12 border-t border-gray-300"></div>


                <div className="mt-5 mb-8" ref={titleRef}>
                    <HeadingText block1="Recent" block2="Articles" align="text-left" />
                </div>


                {/* card */}
                <div className="grid grid-cols-1 self-start md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 md:gap-x-4 md:gap-y-12">
                    {blogs.map((blog) => (
                        <BlogArticleCard key={blog._id} blog={blog}/>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default RecentArticles
