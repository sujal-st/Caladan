'use client';
import TitlePill from "@/components/common/TitlePill"
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import { useRef } from "react";


function AboutMain() {
    const sectionRef=useRef<HTMLElement|null>(null);
    const titleRef=useRef<HTMLDivElement|null>(null);


    useTitleAnimation(titleRef,'.container',sectionRef);

    

    return (
        <section className="h-screen px-4 md:px-8" ref={sectionRef}>
            <div className="relative h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden flex items-center contianer" ref={titleRef}>

                <div className="flex flex-col items-center gap-6">
                    <TitlePill label="tahiti's hidden pulse" />

                    <div>
                        <h2 className="leading-16 text-[56px] text-prim-btn text-center md:leading-23 md:text-[88px]">
                            Secrets of<span className="opacity-60"> the Lagoon</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-center text-prim-btn/60 leading-6 text-base md:text-[20px] md:leading-7">
                            Overwater decks where dolphins wake you. Lagoon waters that mirror the Milky Way. Polynesian elders sharing firelit stories.
                        </p>
                    </div>
                </div>

                {/* image frame */}
                <div className="absolute h-screen w-full">
                    <div className="absolute top-[15%] left-[5%]  shadow-lg md:top-[10%] md:left-[15%] ">
                        <div className="border-2 h-20 w-32 border-white overflow-hidden md:border-4 rounded-lg md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="absolute top-[10%] right-[10%]  shadow-lg rounded-lg  overflow-hidden md:top-[10%] md:right-[10%] ">
                        <div className="border-2 h-20 w-32 border-white rounded-lg  overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="absolute bottom-[5%] left-[7.5%]  shadow-lg rounded-lg  overflow-hidden md:left-[10%] ">
                        <div className="border-2 h-20 w-32 border-white rounded-lg overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd399edcec4ea674d1_pexels-walter-torres-198852755-11533702.avif" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>
                    <div className="absolute bottom-[15%] right-[5%]  shadow-lg rounded-lg  overflow-hidden md:bottom-[10%] md:right-[12.5%] ">
                        <div className="border-2 h-20 w-32 border-white rounded-lg  overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2a9c431c90a10078_pexels-freestockpro-1007657.avif" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutMain
