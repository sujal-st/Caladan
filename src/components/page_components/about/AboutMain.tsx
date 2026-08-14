'use client';
import {gsap,useGSAP} from '@/llib/gsap';
import TitlePill from "@/components/common/TitlePill"
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import Image from "next/image";
import { useRef } from "react";


function AboutMain() {
    const sectionRef=useRef<HTMLElement|null>(null);
    const titleRef=useRef<HTMLDivElement|null>(null);


    useTitleAnimation(titleRef,'.container',sectionRef);

    
    useGSAP(()=>{
        const container = titleRef.current;
        if (!container) return;

        const imgs = container.querySelectorAll<HTMLElement>(".parallax-img");

        function handleMouseMove(e: MouseEvent) {
            const rect = container!.getBoundingClientRect();
            const relX = ((e.clientX - rect.left) / rect.width) * 2;
            const relY = ((e.clientY - rect.top) / rect.height) * 2;

            imgs.forEach((img) => {
                const depth = Number(img.dataset.depth) || 0.5;
                gsap.to(img, {
                    x: relX * 25 * depth,
                    y: relY * 25 * depth,
                    duration: 0.6,
                    ease: "power2.out",
                });
            });
        }

        function handleMouseLeave() {
            gsap.to(imgs, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
        }

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    })
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
                    <div className="absolute top-[15%] left-[5%]  shadow-lg md:top-[10%] md:left-[15%] border border-white parallax-img">
                        <div className="relative border-2 h-20 w-32 border-white overflow-hidden md:border-4 rounded-lg md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <Image src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif" sizes='(max-width: 424px) 128px, (max-width:767px) 192px, (max-width:1023px) 288px' fill alt="img" className="h-full w-full object-cover " />
                        </div>
                    </div>

                    <div className="absolute top-[10%] right-[10%]  shadow-lg rounded-lg  overflow-hidden md:top-[10%] md:right-[10%] border border-white parallax-img">
                        <div className="relative border-2 h-20 w-32 border-white rounded-lg  overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <Image src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif" sizes='(max-width: 424px) 128px, (max-width:767px) 192px, (max-width:1023px) 288px' fill alt="img" className="h-full w-full object-cover " />
                        </div>
                    </div>

                    <div className="absolute bottom-[5%] left-[7.5%]  shadow-lg rounded-lg  overflow-hidden md:left-[10%] border border-white parallax-img">
                        <div className="relative border-2 h-20 w-32 border-white rounded-lg overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <Image src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd399edcec4ea674d1_pexels-walter-torres-198852755-11533702.avif" sizes='(max-width: 424px) 128px, (max-width:767px) 192px, (max-width:1023px) 288px' fill alt="img" className="h-full w-full object-cover " />
                        </div>
                    </div>
                    <div className="absolute bottom-[15%] right-[5%]  shadow-lg rounded-lg  overflow-hidden md:bottom-[10%] md:right-[12.5%] border border-white parallax-img">
                        <div className="relative border-2 h-20 w-32 border-white rounded-lg  overflow-hidden md:border-4 md:h-32 md:w-48 lg:h-48 lg:w-72">
                            <Image src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2a9c431c90a10078_pexels-freestockpro-1007657.avif" sizes='(max-width: 424px) 128px, (max-width:767px) 192px, (max-width:1023px) 288px' fill alt="img" className="h-full w-full object-cover " />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutMain
