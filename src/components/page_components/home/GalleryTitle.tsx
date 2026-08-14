'use client'
import {useRef} from 'react';
import { useTitleAnimation } from '@/llib/useTitleAnimation';
import HeadingText from '@/components/common/HeadingText';
import TitlePill from '@/components/common/TitlePill';


function GalleryTitle() {
    const titleRef = useRef<HTMLDivElement>(null);
    useTitleAnimation(titleRef, '.container');

    return (
        <div className='flex flex-col items-center gap-5 mb-12 max-w-83 mx-auto md:mb-16 md:max-w-180' ref={titleRef}>
            <TitlePill label="lagoon's living breath" />
            <div>
                <HeadingText block1='Wellness Floats on' block2='Reef Dreams' />
            </div>
            <div className='md:max-w-141'>
                <p className='text-center text-prim-btn/60 text-base leading-5 md:leading-6'>ICaladan's overwater sanctuary fuses Tahitian whispers with tide-pulse rituals — where couples entwine in lomilomi waves, families hum with crystal ocean songs, and solo souls dissolve into reef reverie. Your rebirth hovers above paradise.</p>
            </div>

        </div>
    )
}

export default GalleryTitle
