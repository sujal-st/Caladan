'use client';
import HeadingText from '@/components/common/HeadingText';
import TitlePill from '@/components/common/TitlePill';
import StarIcon from '@mui/icons-material/Star';
import { Fragment } from 'react/jsx-runtime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { usePagination } from '@/llib/usePagination';
import { useRef } from 'react';
import { useTitleAnimation } from '@/llib/useTitleAnimation';

interface ReviewCardProps {
    r: review
}
export interface review {
    id: string;
    name: string;
    profession: string;
    review: {
        title: string;
        description: string
    };
    img: string
}

function ReviewCard({ r }: ReviewCardProps) {
    return (
        <div className='card-container flex flex-col md:flex-row gap-3 w-full max-h-133 h-full min-w-98.25 items-stretch md:max-h-none min-w-full lg:w-1/2 lg:min-w-1/2'>

            <div className='container-up p-5 bg-gray-100 rounded-lg w-full h-full flex flex-col gap-8 md:h-120 overflow-hidden md:p-6'>
                <div className='star-txt flex flex-col gap-6 h-full flex-1 md:gap-8'>
                    <div className='flex items-center gap-1'>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Fragment key={i}>
                                <StarIcon className='text-yellow-700! h-5!' />
                            </Fragment>
                        ))
                        }
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='text-prim-btn leading-6 text-base font-semibold md:text-xl md:leading-7 md:font-medium'>
                            {r.review.title}
                        </div>
                        <div className='leading-5 text-base text-prim-btn/60 md:leading-6'>
                            {r.review.description}
                        </div>
                    </div>
                </div>
                <div className='card-name flex flex-col'>
                    <div className='leading-5 text-base font-semibold text-prim-btn md:leading-6'>
                        {r.name}
                    </div>
                    <div className='leading-5 text-base text-prim-btn/60 md:leading-6'>
                        {r.profession}
                    </div>

                </div>
            </div>


            <div className='card-img-down w-full max-h-70 md:max-h-none h-70 md:h-120 rounded-lg overflow-hidden'>
                <img src={r.img} alt="" className='h-full w-full object-cover object-center' />
            </div>
        </div>
    )
}
function ReviewSection() {
    const sectionRef= useRef<HTMLElement|null>(null);
    const titleRef= useRef<HTMLDivElement|null>(null);
    

    useTitleAnimation(titleRef,'.container',sectionRef);
    const reviews = [
        {
            id: '1', name: 'Daniel Novak', profession: 'Adventure Seeker', review: {
                title: 'The lagoon reset we needed',
                description: "Our family actually unplugged here. The kids loved the sound bath and we all left lighter, calmer, and more connected than we've felt in years."
            },
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac6f71e2f6cf6c0843aa68_pexels-julia-volk-7292958.avif'
        },
        {
            id: '2', name: 'Lea Martinez', profession: 'Family Traveler', review: {
                title: 'Finally, wellness that feels natural',
                description: "Caladan is pure paradise. Every sunrise felt like a painting, and the staff made us feel at home from the first moment."
            },
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac691927961ac98c560fe2_pexels-stephanlouis-19119918.avif'
        },
        {
            id: '3', name: 'Hana Saito', profession: 'Solo Retreat Guest', review: {
                title: 'A sanctuary above the reef',
                description: "I arrived exhausted and left renewed. The lomilomi massage and sunrise sessions over the lagoon helped me release stress I'd carried for months."
            },
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac6f718869ff1791ce4e94_pexels-aymannouas-12935961.avif'
        },
    ]

    const {slides}= usePagination(3,reviews);
    
    const handlePrev=()=>{
        // setSlide(prev=>prev-1);
    }
    const handleNext=()=>{
        // setSlide(prev=>prev+1);
    }
    return (
        <section className='pt-12 pb-6 px-4 md:pt-20 md:pb-8 md:px-8' ref={sectionRef}>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">
                <div className='container flex flex-col items-center'>


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

                    {/* card */}
                    <div className='flex overflow-hidden w-full mb-8 lg:overflow-auto lg:gap-4'>
                        {
                            slides.map((review:review) => (
                                <ReviewCard key={review.id} r={review} />
                            ))
                        }
                    </div>

                    {/* slider button */}
                    <div className='flex gap-2'>
                        <button className='rounded-full p-2 bg-prim-btn' onClick={handlePrev}>
                            <ArrowBackIcon className='text-white!'/>
                        </button>
                        <button className='rounded-full p-2 bg-gray-200' onClick={handleNext}>
                            <ArrowForwardIcon/>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ReviewSection
