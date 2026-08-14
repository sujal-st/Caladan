'use client';
import { useRef } from "react";
import Button from "@/components/common/Button";
import TitlePill from "@/components/common/TitlePill";
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import Link from "next/link";


function CTATitle() {

    const titleRef = useRef<HTMLDivElement | null>(null);

    useTitleAnimation(titleRef, '.container');

    return (
        <div className="flex flex-col gap-5 items-center max-w-141 mx-auto container" ref={titleRef}>

            <TitlePill label="Your Escape Awaits" />
            <div>
                <h2 className="leading-10 text-[36px] text-center md:leading-13 md:text-[48px]">
                    Last Rooms<span className="opacity-60"> This Month</span>
                </h2>
            </div>

            <div>
                <p className="leading-5 text-base text-prim-btn text-center md:leading-6">
                    Join thousands of travelers discovering turquoise lagoons, overwater sunrise yoga, and starlit beach dinners. Your perfect bungalow is waiting.
                </p>
            </div>

            <div className="flex items-center gap-2">
                <Link href='/book-inquiry'>
                    <Button label="Reserve Now" bg="prim" />
                </Link>
                <Link href='/resorts'>
                    <Button label="See All Rooms" bg="bg-gray-100 text-prim-btn" />
                </Link>
            </div>
        </div>
    )
}

export default CTATitle
