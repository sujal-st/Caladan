'use client';
import HeadingText from "@/components/common/HeadingText"
import TitlePill from "@/components/common/TitlePill";
import { tabData } from "@/components/constants/data";
import { useRef, useState } from "react";
import { FAQDropdown } from "../home/FAQTab";
import { useTitleAnimation } from "@/llib/useTitleAnimation";

function FAQ() {
    const sectionRef= useRef<HTMLElement|null>(null);
    const titleRef= useRef<HTMLDivElement|null>(null);

    const [tabSwitch, setTabSwitch] = useState('1');


    useTitleAnimation(titleRef,'.faq-cont',sectionRef);
    return (
        <section className="py-12 px-4 md:px-8 md:py-20" ref={sectionRef}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 faq-cont">

                {/* title */}
                <div className="flex flex-col gap-5" ref={titleRef}>
                    <div>
                        <TitlePill label="island essential" />
                    </div>
                    <div>
                        <HeadingText block1="Your Stay," block2="Answered" align="text-left" />
                    </div>
                    <p>
                        Quick answers on bookings, overwater villas, special requests, and our Tahiti location.
                    </p>
                </div>

                {tabData.map((t) => (
                    tabSwitch === t.id
                    &&
                    <div key={t.id} className='flex flex-col justify-center gap-3 md:gap-4 w-full'>
                        {t.list.map((li) => (

                            <FAQDropdown key={li.id} li={li} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
