'use client'
import Button, { LightButton } from "@/components/common/Button"
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRef, useState } from "react";
import { useTitleAnimation } from "@/llib/useTitleAnimation";

function HeroSection() {
    const [toggle, setToggle] = useState(true);
    const vidRef = useRef<HTMLVideoElement>(null);
    const sectionRef=useRef<HTMLElement|null>(null);
    const heroRef = useRef<HTMLDivElement|null>(null);

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


    
    useTitleAnimation(heroRef,'.container',sectionRef)
    return (
        <section className="w-full p-1 md:h-screen lg:p-4 " ref={sectionRef}>
            <div className="rounded-2xl h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto container">
                <div className="relative overflow-hidden rounded-xl md:h-full ">
                    <div className="bg-prim-btn absolute z-10 h-full w-full opacity-40"></div>
                    <video id="532ef140-c6a2-edd2-7d75-66929c4acf39-video" loop muted autoPlay className="absolute z-0 h-full w-full object-cover object-center rounded-xl" ref={vidRef}>
                        <source src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_mp4.mp4" data-wf-ignore="true" />
                        <source src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_webm.webm" data-wf-ignore="true" />
                    </video>

                    <div className="px-4 py-30 md:flex flex-col gap-6 md:p-8 md:pt-35 lg:gap-30 lg:max-w-full mx-auto" ref={heroRef}>

                        <div className="relative flex flex-col gap-6 items-center z-10 ">
                            <div className="flex flex-col gap-5 items-center">
                                <div>
                                    <h1 className="leading-16 text-[56px] text-center text-white md:leading-23 md:text-[88px] ">
                                        The Lagoon
                                        <span className="opacity-50"> Is Calling</span>
                                    </h1>
                                </div>
                                <div className="max-w-[]">
                                    <p className="leading-5 text-base text-center text-white md:leading-6">
                                        Breathe with the tides in a resort suspended above Tahiti’s reef. From moonlit lomilomi to family sound baths, Caladan turns the ocean’s rhythm into your everyday ritual.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <LightButton label="Start Your Escape" />
                                <Button label="Get Template" bg='bg-white/10 text-white border border-gray-50/10' />
                            </div>
                        </div>


                        {/* grid */}
                        <div className="hidden md:grid grid-cols-2 gap-4 z-10 text-white leading-10 text-[32px] lg:flex lg:gap-4 lg:justify-center lg:h-full">
                            <div className="justify-self-center">
                                <h2 className="whitespace-nowrap">42 Villas</h2>
                            </div>
                            <div className="hidden lg:flex h-full w-2 bg-white"></div>
                            <div className="justify-self-center">
                                <h2 className="whitespace-nowrap">Private Lagoon</h2>
                            </div>
                            <div className="hidden lg:flex h-full w-1 bg-white"></div>
                            <div className="justify-self-center">
                                <h2 className="whitespace-nowrap">5 Restaurants</h2>
                            </div>
                            <div className="hidden lg:flex h-full w-1 bg-white"></div>
                            <div className="justify-self-center">
                                <h2 className="whitespace-nowrap">Award-Winning Spa</h2>
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

export default HeroSection
