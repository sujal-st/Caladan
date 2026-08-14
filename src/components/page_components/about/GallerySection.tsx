'use client'
import HeadingText from "@/components/common/HeadingText";
import Image from "next/image";
import {gsap,useGSAP} from "@/llib/gsap";
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import { useRef } from "react";

interface gallery {
    id: string;
    title: string;
    role: string;
    img: string
}

function GallerySection() {
    const sectionRef=useRef<HTMLElement|null>(null);
    const titleRef=useRef<HTMLDivElement|null>(null);

    const gallery: gallery[] = [
        {
            id: '1',
            title: 'Tane Hereiti',
            role: 'Co-Founder & Cultural Guardian',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ab1826ffe1ec08e469271f_Woman%20in%20Coastal%20Setting.avif'
        },
        {
            id: '2',
            title: 'Luca Moretti',
            role: 'Co-Founder & Executive Chef',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ab18c6bea84fd2560c5bf3_Confident%20Young%20Man%20in%20Luxurious%20Coastal%20Setting%20(1).avif'
        },
        {
            id: '3',
            title: 'Maeva Tetuanui',
            role: 'Co-Founder & Marine Director',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ab1826ae2e46a3a221fb50_Stylish%20Young%20Man%20by%20the%20Pool.avif'
        },
        {
            id: '4',
            title: 'Elena Voss',
            role: 'Co-Founder & Guest Experience',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ab18266528877c8c6e8da3_Stylish%20Beach%20Portrait.avif'
        },
    ]

    useTitleAnimation(titleRef,".container",sectionRef)
    useGSAP(()=>{
        gsap.set('img',{scale:1.4})
        gsap.to('img',{
            yPercent:15,
            scrollTrigger:{
                trigger:'img',
                start:'top bottom',
                scrub:1
            }
        })
    },{scope:sectionRef})
    return (
        <section className="px-4 pt-16 pb-6 md:pt-30 md:pb-8 md:px-8" ref={sectionRef}>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">

                {/* title */}
                <div className="mb-12 contianer" ref={titleRef}>
                    <HeadingText block1="Meet the" block2="Caladan Founders" align="text-left" />
                </div>

                {/* gallery grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                    {gallery.map((card) => (
                        <div key={card.id} className="relative gallery-card min-h-72 rounded-lg overflow-hidden md:min-h-108 lg:min-h-128 lg:min-w-45" >
                            <Image src={card.img} alt="img" sizes="(max-width:767px) 345px, (max-width:1023px) 228px" fill className="h-full w-full object-cover object-center z-0"/>

                            <div className="absolute bottom-0 bg-linear-to-t from-prim-btn to-transparent z-1 h-50 w-full md:from-prim-btn md:to-prim-btn/0"></div>
                            <div className="absolute bottom-5 left-5 text-white z-2">
                                <div className="text-base font-medium leading-5 md:leading-6">{card.title}</div>
                                <div className="text-white/50 text-base leading-4">{card.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default GallerySection
