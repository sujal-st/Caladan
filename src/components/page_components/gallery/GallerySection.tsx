'use client';

import { gsap, useGSAP} from '@/llib/gsap';
import TitlePill from "@/components/common/TitlePill"
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import { useRef } from "react";




function GallerySection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const galleryContainerRef = useRef<HTMLDivElement | null>(null);

    useTitleAnimation(titleRef, '.title-container', sectionRef);


    useGSAP(() => {
        const gallery = galleryRef.current;
        const galleryCont = galleryContainerRef.current;
        if (!gallery || !galleryCont) return;

        const getDistance = () =>
            Math.max(gallery.scrollHeight - galleryCont.offsetHeight, 0);


        const images = gsap.utils.toArray('img');

        const t = gsap.timeline({
            scrollTrigger: {
                trigger: galleryCont,
                start: 'top top',
                end: () => '+=450%',
                scrub: 0.5,
                pin: true,
                invalidateOnRefresh: true,
            }
        })
        gsap.set('img', { scale: 1.2 })
        t.fromTo(gallery,
            { y: 650 },
            {
                y: () => -getDistance(),
            }
        )
            .to('img', {
                yPercent: 15,
            }, "<");


    }, { scope: sectionRef });
    return (
        <section className="px-4 md:px-8" ref={sectionRef}>
            <div className='mx-auto min-[1200px]:max-w-280'>

                <div className="relative container min-h-screen flex items-center md:items-safe-end gallery-container overflow-hidden" ref={galleryContainerRef}>


                    {/* title */}
                    <div className="flex flex-col justify-center items-center gap-6 title-container" ref={titleRef}>
                        <TitlePill label="moments in paradise" />
                        <div>
                            <h1 className="text-[3.5rem] leading-16 text-center md:text-[88px] md:leading-23">
                                Visual <span className="text-prim-btn/60">Escape</span> to Caladan
                            </h1>
                        </div>
                    </div>

                    {/* gallery */}
                    <div className="absolute flex flex-col items-center inset-0 z-15 gallery" ref={galleryRef}>

                        <div className="flex  gal-card">
                            <div className="flex flex-col items-center gap-2">
                                <div className="min-h-40 max-w-[256px] rounded-lg overflow-hidden md:max-w-89 md:min-h-56 ">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aeefb3cea8d1d95a3206d7_pexels-ksu-eli-studio-78564297-9116633.avif" alt="" className="w-full h-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">
                                    SUNRISE YOGA REEF
                                </div>
                            </div>
                        </div>

                        <div className="px-5 mt-16 mb-8 flex flex-col w-full gap-8 md:flex-row md:px-16 md:justify-between lg:mt-0 gal-card">
                            <div className="flex flex-col items-center gap-2 self-start md:self-auto">
                                <div className="max-w-40 min-h-56 rounded-lg overflow-hidden md:min-w-57 md:min-h-75">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aeefb4e4569b39e4d07af5_pexels-keeganjchecks-14524361.avif" alt="" className="h-full w-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">TURTLE GLASS FLOOR</div>
                            </div>
                            <div className="flex flex-col items-center gap-2 ml-12">
                                <div className="max-w-40 min-h-64 rounded-lg overflow-hidden md:max-w-57 md:min-h-84">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac2ac5677e30503d305dac_pexels-jess-vide-5006972.avif" alt="" className="h-full w-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">COUPLES LOMILOMI</div>
                            </div>
                        </div>

                        <div className="pl-16 pr-8 mb-6 flex flex-col-reverse w-full gap-8 md:flex-row md:pl-16 md:pr-0 md:min-h-170 lg:gap-35 gal-card">
                            <div className="flex flex-col items-center gap-2 self-start md:self-end">
                                <div className="min-h-40 max-w-[256px] rounded-lg overflow-hidden md:min-w-83.75 md:min-h-56">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdb0ce5fcf43482680_pexels-myatezhny39-2927518.avif" alt="" className="w-full h-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">
                                    MOONLIT SOLO SOAK
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2 self-end mb-8 md:self-start md:justify-self-start md:relative md:right-1/3 lg:right-0">
                                <div className="min-h-72 max-w-48 rounded-lg overflow-hidden md:max-h-98.75 md:min-w-83.75"><img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac2a077227761a264323bc_pexels-michael-block-1691617-3225531%20(1).avif" alt="" className="h-full w-full object-cover" loading='lazy' /></div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">FAMILY SOUND BATH</div>
                            </div>
                        </div>


                        <div className="flex flex-col-reverse w-full gap-8 md:flex-row md:min-h-126 gal-card">
                            <div className="flex flex-col items-center gap-2 w-fit mx-auto md:mx-0 md:self-end">
                                <div className="max-h-44 min-w-40 overflow-hidden rounded-lg md:min-w-56.75 md:min-h-64.5 lg:max-w-56.75 lg:min-h-65">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aeefb3fde379b25ebbe105_pexels-stijn-dijkstra-1306815-29989229.avif" alt="" className="h-full w-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">
                                    CRYSTAL OCEAN BOWLS
                                </div>

                            </div>
                            <div className="flex flex-col items-center gap-2 self-end md:self-auto">
                                <div className="min-h-56 max-w-[288px] rounded-lg overflow-hidden md:min-w-104 md:max-h-80 lg:min-w-150 lg:min-h-95">
                                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69a71bbad497568ae83d7a5d_Tranquil%20Tropics%20Retreat.avif" alt="" className="h-full w-full object-cover" loading='lazy' />
                                </div>
                                <div className="text-[10px] leading-2.5 font-medium md:leading-3 font-mono">
                                    PRIVATE FISH DOCK
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GallerySection
