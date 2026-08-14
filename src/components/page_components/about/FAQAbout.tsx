'use client';
import {list} from '@/components/constants/data'
import TitlePill from "@/components/common/TitlePill";
import { FAQDropdown } from "../home/FAQSection";
import HeadingText from "@/components/common/HeadingText";
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import { useRef } from "react";
import type { faq } from '@/components/constants/types';


interface FAQCompProps {
    list: faq[]
}
export function FAQComp({ list }: FAQCompProps) {
    return (
        <div className='flex flex-col gap-3 md:gap-4 w-full min-[1200px]:max-w-225 mx-auto'>
            {list.map((li) => (

                <FAQDropdown key={li.id} li={li} />
            ))}
        </div>
    )
}

function FAQAbout() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    
    useTitleAnimation(titleRef, '.container', sectionRef);
    return (
        <section className="py-12 px-4 md:mx-8 md:py-20" ref={sectionRef}>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">


                {/* title */}
                <div className="flex flex-col items-center gap-5 mb-12 container" ref={titleRef}>
                    <TitlePill label="island essential" />
                    <div>
                        <HeadingText block1="Your Stay," block2="Answeered" />
                    </div>

                </div>

                {/* tabs */}
                <FAQComp list={list} />
            </div>

        </section>
    )
}

export default FAQAbout

