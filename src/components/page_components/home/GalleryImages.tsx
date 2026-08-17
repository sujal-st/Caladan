'use client'
import {useRef} from 'react';
import { gsap, useGSAP, ScrollTrigger } from '@/llib/gsap';


function GalleryImages() {
    const divRef= useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set('img',{scale:1.15});
        gsap.to('img',{
            yPercent: 8,
            scrollTrigger: {
                trigger: 'img',
                start: 'top bottom',
                scrub: 1,                
            }
        })
        ScrollTrigger.refresh();
    },{scope: divRef})
    return (
        <div className='grid grid-cols-3 gap-2 md:gap-4 gallery-container' ref={divRef}>

            <div className='max-h-40 h-40 rounded-lg overflow-hidden self-end md:min-h-75 img-container'>
                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd55a63aed167c4742_pexels-alohaphotostudio-6961666.avif" alt="" className='h-full w-full object-cover img-el' />
            </div>
            <div className='max-h-44 h-44 rounded-lg overflow-hidden md:min-h-88 img-container'>
                <img src="/images/gal2.avif" loading='eager' alt="img" className='object-cover h-full w-full object-center img-el' />
            </div>
            <div className='max-h-40 h-40 rounded-lg overflow-hidden self-end md:min-h-75 img-container'>
                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdfb59242c63856bad_pexels-jonathanborba-13911220%20(1).avif" alt="" className='h-full w-full object-cover img-el' />
            </div>
            <div className='max-h-40 h-40 rounded-lg overflow-hidden md:min-h-75 img-container'>
                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif" alt="" className='h-full w-full object-cover img-el' />
            </div>
            <div className='max-h-44 h-44 rounded-lg overflow-hidden md:min-h-88 img-container'>
                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif" alt="" className='object-cover h-full w-full object-center img-el' />
            </div>
            <div className='max-h-40 h-40 rounded-lg overflow-hidden md:min-h-75 img-container'>
                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69a9746c7ab6e4371c4aae70_pexels-saeb-mahajna-14125913-6297105.avif" alt="" className='h-full w-full object-cover img-el' />
            </div>

        </div>
    )
}

export default GalleryImages
