import TitlePill from '@/components/common/TitlePill';
import Image from 'next/image';
import { blogs } from '@/components/constants/data';
import type { blog } from '@/components/constants/types';

type BlogCardProps = {
    blog: blog
}

function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className='bg-gray-100 rounded-lg p-3 flex flex-col gap-3 md:p-4'>
            <div className='flex flex-col gap-3'>
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
                <div className='flex flex-col gap-2'>
                    <div className='text-prim-btn leading-6 text-base font-medium md:leading-7 md:text-[20px]'>{blog.title}</div>
                    <div className='leading-5 text-base text-prim-btn/60 md:leading-6'>{blog.subtitle}</div>
                </div>
            </div>

            <div className='underline leading-5 text-[13px] font-medium text-sm'>Ckeck Article</div>
        </div>
    )
}

function BlogGrid() {
    return (
        <section className='pt-24 pb-6 px-4 md:px-8 md:pt-40 md:pb-8'>
            <div className='md:max-w-full mx-auto'>
                {/* title */}
                <div className='flex flex-col items-center gap-6 mb-8 md:mb-12'>
                    <TitlePill label='island stories' />

                    <div className=''>
                        <h1 className='text-prim-btn leading-13 text-[48px] text-center md:leading-17 md:text-[64px]'>
                            Caladan <span className='text-prim-btn/60'>Chronicles</span>
                        </h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]'>

                    <div className='relative h-100 rounded-lg overflow-hidden lg:h-full'>
                        <div className="bg-prim-btn/40 absolute inset-0 -z-1"></div>
                        <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a98d78cf5423120cd79c09_pexels-saeb-mahajna-14125913-6297105.avif' alt='img' fill className='object-cover -z-2' />

                        <div className='flex flex-col justify-end gap-6 p-6 text-white h-full md:p-8 md:gap-8 lg:justify-between'>
                            <div className='flex flex-col gap-6 md:gap-8'>

                                <TitlePill label='island adventures' />
                                <div>
                                    <h2 className='leading-10 text-[36px] md:leading-13 md:text-[48px]'>
                                        5 Hidden French Polynesia Gems Only Locals Know
                                    </h2>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <div className='relative h-7 w-7 rounded-full overflow-hidden'>
                                        <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a98d83f2585eea375531b0_Tropical%20Balcony%20Serenity%20(1).avif' alt='img' fill className='object-cover' />
                                    </div>
                                    <div className='leading-6 text-base font-medium md:leading-6 md:text-[20px]'>Meeva Tetauni</div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div>March 12, 2026</div>
                                    <div>•</div>
                                    <div>12 min read</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* grid */}
                    <div className='flex flex-col gap-3 md:gap-4'>

                        {blogs.map((b) => (
                            <BlogCard key={b.id} blog={b} />
                        )).slice(0,3)}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default BlogGrid
