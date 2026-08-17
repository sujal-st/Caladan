'use client'
import { useRef } from "react";
import Button from "@/components/common/Button";
import HeadingText from "@/components/common/HeadingText";
import Link from "next/link";
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import Image from "next/image";
import TitlePill from "@/components/common/TitlePill";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { gsap, useGSAP } from '@/llib/gsap';
import type { ResortCardProps } from "./ReefSection";
import { urlFor } from "@/sanity/lib/image";

export function ResortCard({ resort }: ResortCardProps) {
    useGSAP(() => {
        gsap.set('.resort-img-container', { scale: 1.5 })

        gsap.to('.resort-img-container', {
            yPercent: 15,
            scrollTrigger: {
                trigger: '.resort-card',
                start: 'top bottom',
                end: 'top 20%',
                scrub: true,
            }
        })
    },)
    return (
        <Link href={`/resorts/${resort.slug}`} className="group resort-card flex flex-col gap-3 md:gap-4 lg:min-w-77.5" >

            {/* img */}
            <div className=" relative h-64 max-h-64 rounded-2xl overflow-hidden md:max-h-96 md:h-96">
                <div className="relative h-full w-full resort-img-container">
                    <Image src={urlFor(resort.img).width(800).height(600).url()} alt={resort.title} fill loading="eager" sizes="(max-width: 425px) 420px, (max-width: 767px) 632px, (max-width: 1023px) 238px, 439px" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="absolute top-5 left-5 z-11 md:top-6 md:left-6">
                    <TitlePill label={resort.cat} type="card-label" />
                </div>
                <div className="w-full h-1/2 bg-linear-to-b from-prim-btn to-transparent inset-0 absolute z-10"></div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-base leading-6 font-medium md:leading-7 md:text-[20px]">
                    {resort.title}
                </div>
                <div className="flex items-center gap-2 justify-start lg:gap-3 flex-wrap">
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <img src="/area.svg" alt="" />
                        {resort.size}
                    </div>
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <HotelOutlinedIcon className="h-6! w-6!" />
                        {resort.beds} Beds
                    </div>
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <PeopleAltOutlinedIcon className="h-6! w-6!" />
                        {resort.guests} Guests
                    </div>
                </div>
            </div>
        </Link>
    )
}

function ReefTitle() {
    const titleRef = useRef<HTMLDivElement | null>(null);

    useTitleAnimation(titleRef, '.container');


    return (
        <div className="mb-12 flex flex-col gap-6 md:gap-8 md:mb-16 lg:flex-row lg:items-end container" ref={titleRef}>

            <div className="flex flex-col gap-5 md:gap-6">
                <HeadingText block1="Reefside" block2="Sanctuaries" align='text-left' />
                <div>
                    <p>Glass floors pulse with parrotfish dawn colors. Private decks sip Tahiti's tides. Discover our floating havens where lagoon rhythms compose your perfect wellness escape.</p>
                </div>
            </div>
            <Link href='/resorts'>
                <Button label="See All Resorts" bg="sec" />
            </Link>
        </div>
    )
}

export default ReefTitle
