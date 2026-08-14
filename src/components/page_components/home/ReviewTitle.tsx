'use client';
import { useRef } from 'react';
import { useTitleAnimation } from '@/llib/useTitleAnimation';

import HeadingText from '@/components/common/HeadingText';
import TitlePill from '@/components/common/TitlePill';

import type { review } from '@/components/constants/types';
import { reviews } from '@/components/constants/data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReviewCard } from './ReviewSection';

function ReviewTitle() {
    const titleRef = useRef<HTMLDivElement | null>(null);


    useTitleAnimation(titleRef, '.container');



    return (
        <div className='flex flex-col items-center w-full gap-6 mb-12 container' ref={titleRef}>
            <div className="flex flex-col items-center gap-5">
                <TitlePill label='guest voices echo' />
                <HeadingText block1='Voices from' block2='the Overwater' />
            </div>
            <div>
                <p className='leading-5 text-base text-prim-btn/60 text-center md:leading-6'>
                    Hear from souls reborn above the reef. Families synced to ocean rhythms, solo travelers dissolving into tide-breath serenity.
                </p>
            </div>
        </div>
    )
}

export default ReviewTitle

export function ReviewCards() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const handlePrev = () => {
        scrollRef.current?.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
    }
    const handleNext = () => {
        scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' })
    }
    return (
        <>
            {/* card */}
            <div className='relative w-full'>
                <div className='absolute left-0 inset-0 bg-linear-to-r from-white to-transparent w-50 z-2' />
                <div className='flex items-center gap-2 w-full snap-x snap-mandatory scroll-smooth scrollbar-none mb-8 overflow-x-auto xl:overflow-x-auto lg:gap-3' ref={scrollRef}>
                    {
                        reviews.map((review: review) => (
                            <ReviewCard key={review.id} r={review} />
                        ))
                    }
                </div>
            </div>


            {/* slider button */}
            <div className='flex gap-2'>
                <button className='rounded-full p-2 bg-prim-btn cursor-pointer' onClick={handlePrev}>
                    <ArrowBackIcon className='text-white!' />
                </button>
                <button className='rounded-full p-2 bg-gray-200 hover:bg-prim-btn duration-300 transition-colors cursor-pointer' onClick={handleNext}>
                    <ArrowForwardIcon className='hover:text-white! duration-300! transition-colors!' />
                </button>
            </div>
        </>
    )
}