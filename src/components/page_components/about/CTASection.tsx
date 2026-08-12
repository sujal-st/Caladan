'use client'
import Button, { LightButton } from "@/components/common/Button"
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRef, useState } from "react";

function CTASection() {
    const [toggle, setToggle] = useState(true);
    const vidRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const handleVidTog = () => {
        if (!vidRef.current) return;
        if (toggle) {
            vidRef.current.pause();
            setToggle(false)
        }
        else {
            vidRef.current.play();
            setToggle(true);
        }
    }

    useTitleAnimation(titleRef,'.container',sectionRef)
    return (
        <section className="w-full px-3 md:px-4 md:py-8" ref={sectionRef}>
            <div className="rounded-2xl h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto container">
                <div className="relative overflow-hidden rounded-xl md:h-full max-h-107.5 md:max-h-132.5">
                    <div className="bg-prim-btn absolute z-10 h-full w-full opacity-40 "></div>
                    <video id="532ef140-c6a2-edd2-7d75-66929c4acf39-video" loop muted autoPlay className="absolute z-0 h-full w-full object-cover object-center rounded-xl" ref={vidRef}>
                        <source src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69834c94e7fe215f4bd8de43_8397918-uhd_2560_1440_25fps_mp4.mp4" data-wf-ignore="true" />
                        <source src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69834c94e7fe215f4bd8de43_8397918-uhd_2560_1440_25fps_webm.webm" data-wf-ignore="true" />
                    </video>

                    <div className="px-4 py-24 md:flex flex-col gap-6 md:p-8 md:py-40 lg:gap-30 lg:max-w-full mx-auto" ref={titleRef}>

                        <div className="relative flex flex-col gap-6 items-center z-10 ">
                            <div className="flex flex-col gap-5 items-center w-full">
                                <div>
                                    <h2 className="leading-10 text-[36px] text-center text-white md:leading-13 md:text-[48px] ">
                                        Plan your perfect
                                        <span className="underline decoration-3 underline-offset-10 decoration-wavy md:underline-offset-11 lg:underline-offset-11"> getaway.</span>
                                    </h2>
                                </div>
                                <div className="max-w-[]">
                                    <p className="leading-5 text-base text-center text-white md:leading-6">
                                        Join thousands of travelers discovering turquoise lagoons, overwater sunrise yoga, and starlit beach dinners. Your perfect bungalow is waiting.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <LightButton label="Reserve Now" />
                                <Button label="See All Rooms" bg='bg-white/10 text-white border border-gray-50/10' />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-2 right-2 p-1 bg-white/10 border border-gray-50/10 pointer-cursor rounded-lg z-20" onClick={handleVidTog}>
                        {toggle ?
                            (
                                <PauseIcon className="text-white!" />
                            ) :
                            (
                                <PlayArrowIcon className="text-white!" />
                            )}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CTASection
