'use client';
import TitlePill from "@/components/common/TitlePill";
import type { resort } from "../../home/ReefSection";
import Image from "next/image";

import { gsap, useGSAP, ScrollTrigger } from '@/llib/gsap';
import { useRef } from "react";


interface TopImageProps {
    resort: resort
}

function TopImage({ resort }: TopImageProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const img = gsap.utils.toArray<HTMLElement>('.img');

        img.forEach((i) => {


            gsap.set(i, { scale: 1.2 });

            gsap.to(i, {
                yPercent: 10,
                scrollTrigger: {
                    trigger: i,
                    start: 'top center',
                    scrub: true
                }
            })
        })
    }, { scope: sectionRef })
    return (
        <div className="relative min-h-80 min-w-98.25 overflow-hidden rounded-lg p-5 h-full md:w-full" ref={sectionRef}>
            <Image src={resort.img} alt={resort.title} fill className="object-cover h-full w-full -z-1 img"  />
            <div className="absolute inset-0 h-full flex flex-col justify-between p-5 md:flex-row md:items-end">
                <TitlePill label={resort.cat} />
                {/* sub gallery */}
                <div className="relative p-3 rounded-lg border border-gray-50 flex items-center gap-2 w-fit">
                    <div className="absolute inset-0 bg-white/30"></div>

                    <div className="w-15.5 h-11.5 relative rounded-lg overflow-hidden  md:min-h-19.5 md:min-w-29.5">
                        <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e4994822e17b6f0992_pexels-ksu-eli-studio-78564297-9116633.avif' alt="img" fill className="img" />
                    </div>
                    <div className="w-15.5 h-11.5 relative rounded-lg overflow-hidden gap-2 md:min-h-19.5 md:min-w-29.5">
                        <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e43f566491a0dc0953_pexels-leorossatti-2598638.avif' alt="img" fill  className="img"/>
                    </div>
                    <div className="w-15.5 h-11.5 relative rounded-lg overflow-hidden gap-2 md:min-h-19.5 md:min-w-29.5">
                        <Image src='https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e4dee9b8f08dc2f5be_pexels-stijn-dijkstra-1306815-29989229.avif' alt="img" fill  className="img"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopImage
