'use client';
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from "react";

import {gsap,useGSAP} from '@/llib/gsap';

function GallerySection() {
  const scrollRef= useRef<HTMLDivElement|null>(null);

  const galleryItems = [
    { id: '1', src: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a43eeca7b6045e93b8cd_pexels-freestockpro-1007657.avif' },
    { id: '2', src: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b2be0f339d350d98ea211e_pexels-asadphoto-1591361.avif' },
    { id: '3', src: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a1ee7506720691b0a6a6_pexels-jonathanborba-13911220%20(1).avif' },
  ];

  const handlePrev=()=>{
    scrollRef.current?.scrollBy({left: -scrollRef.current.clientWidth, behavior: 'smooth'});
  }

  const handleNext=()=>{
    scrollRef.current?.scrollBy({left: scrollRef.current.clientWidth, behavior: 'smooth'});
  }

  useGSAP(()=>{
    const img= gsap.utils.toArray<HTMLImageElement>('.img');
    img.forEach((i)=>{
      gsap.set(i,{scale:1.2});

      gsap.to(i,{
        yPercent:15,
        scrollTrigger:{
          trigger: '.img-grid',
          start: 'top top',
          scrub: 1
        }
      })
    })
  })
  return (
    <div className="flex flex-col gap-3">
      <div className="text-base leading-6 font-medium">Gallery</div>

      {/* gallery*/}
      <div className="flex items-center overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth gap-4 img-grid" ref={scrollRef}>
        {galleryItems.map((item) => (

          <div key={item.id} className="relative min-h-64 min-w-98.5 rounded-lg overflow-hidden min-[426px]:w-full md:min-w-176 md:min-h-90">
            <Image src={item.src} alt='img' fill className="h-99 w-full object-cover img" />
          </div>
        ))}

      </div>
      {/* button */}
      <div className='flex items-center justify-center gap-2'>
        <button className='rounded-full p-2 bg-gray-200' onClick={handlePrev}>
          <ArrowBackIcon />
        </button>
        <button className='rounded-full p-2 bg-gray-200' onClick={handleNext}>
          <ArrowForwardIcon />
        </button>
      </div>

    </div>
  )
}

export default GallerySection
