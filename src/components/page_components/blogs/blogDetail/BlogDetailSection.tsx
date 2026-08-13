import React from 'react'
import type { BlogCardProps } from '../BlogGrid'
import TitlePill from '@/components/common/TitlePill'
import Image from 'next/image'

function BlogDetailSection({ blog }: BlogCardProps) {
    return (
        <section className='pt-24 pb-6 px-4 md:px-8 md:pt-40 md:pb-8'>
            <div className='container mx-auto'>

                {/* title */}
                <div className='flex flex-col gap-6 mb-6'>
                    <div className='flex flex-col gap-5'>
                        <TitlePill label={blog.cat} />
                        <h1 className='leading-13 text-[48px] md:leading-17 md:text-[64px]'>
                            {blog.title}
                        </h1>
                    </div>
                    <div className='text-prim-btn/80 text-base leading-5'>
                        {blog.subtitle}
                    </div>
                </div>

                {/* thumbnail */}
                <div className='relative h-125 rounded-lg overflow-hidden'>
                    <div className='bg-prim-btn/50 absolute inset-0 -z-1'></div>
                    <Image src={blog.img} alt={blog.title} fill className='object-cover -z-2' loading='eager' />

                    <div className='p-6 flex items-end h-full md:p-8'>
                        <div className='flex gap-3 md:justify-between md:items-end md:w-full'>
                            <div className='flex gap-2 items-center'>
                                <div className='relative w-7 h-6 rounded-full overflow-hidden'>
                                    <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a98d83f2585eea375531b0_Tropical%20Balcony%20Serenity%20(1).avif' alt='profile' fill className='object-cover' />
                                </div>
                                <div className='flex flex-col leading-5 text-base md:leading-6'>
                                    <div className='text-white'>Maeva Tetuanui</div>
                                    <div className='text-white/60'>Marine Guide & Snorkel Expert</div>
                                </div>
                            </div>

                            <div className="details_blog text-white flex justify-start flex-wrap leading-5 text-base md:leading-6">
                                <div className='whitespace-nowrap'>March 12, 2026</div>
                                <div>•</div>
                                <div>8 min read</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailSection
