'use client';
import HeadingText from "@/components/common/HeadingText"
import { Fragment } from "react/jsx-runtime"
import { gsap, useGSAP, ScrollTrigger } from '@/llib/gsap';
import { useTitleAnimation } from "@/llib/useTitleAnimation";
import { useRef } from "react";

function JournerySection() {
    const sectionRef=useRef<HTMLElement|null>(null);
    const titleRef=useRef<HTMLDivElement|null>(null);

    const timeline = [
        {
            id: '1',
            title: 'A Dream in the Lagoon',
            descrip: "On a night snorkel off Tahiti, our founders imagined a place where overwater luxury and true Polynesian culture could live side by side. The idea for Caladan was born under a sky full of stars.",
            date: '2015'
        },
        {
            id: '2',
            title: 'Finding the Perfect Shore',
            descrip: "After years of scouting islands and reefs, we discovered a quiet lagoon with crystal-clear water, healthy coral, and sunset views. This untouched stretch of sand became Caladan's future home.",
            date: '2018'
        },
        {
            id: '3',
            title: 'Opening Our Overwater Bungalows',
            descrip: "Caladan welcomed its first guests with 20 overwater bungalows, a lagoon-facing restaurant, and guided marine adventures. Early reviews praised the intimate atmosphere and local-led experiences.",
            date: '2021'
        },
        {
            id: '4',
            title: 'Caladan Becomes a Lagoon Icon',
            descrip: "With expanded villas, signature chef's table dinners, and renowned night snorkel tours, Caladan evolved into a sought-after escape in French Polynesia, loved by returning guests and first-time dreamers alike.",
            date: '2025'
        },
    ]

    useTitleAnimation(titleRef,".contianer",sectionRef);
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 767px)", () => {
            gsap.fromTo('.line-fill-mobile',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.line-track-mobile',
                        start: 'top center',
                        end: "bottom center",
                        scrub: 1,
                    }
                }
            )
            const bullets = gsap.utils.toArray<HTMLElement>('.circle-fill');

            bullets.forEach((bullet) => {
                gsap.set(bullet, { scale: 0 });
                ScrollTrigger.create({
                    trigger: bullet.closest('.circle-container'),
                    start: 'top center',
                    scrub: 1,
                    onEnter: () => gsap.to(bullet, { scale: 1, ease: 'none' }),
                    onLeaveBack: () => gsap.to(bullet, { scale: 0, ease: 'none' }),
                    invalidateOnRefresh: true
                })
            })

            return () => {
                gsap.set([".circle-fill",".line-fill-mobile",bullets], { clearProps: "all" });
            }
        })

        mm.add("(min-width: 768px)",()=>{
            gsap.fromTo('.line-fill',
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.line-container',
                        start: 'top center',
                        end: "bottom center",
                        scrub: 1,
                        
                    }
                }
            )


            const bullets= gsap.utils.toArray<HTMLElement>('.circle-fill');
            
            bullets.forEach((bullet)=>{

                gsap.set(bullet,{scale:0});
                ScrollTrigger.create({
                    trigger: bullet.closest('.circle-container'),
                    start: 'top center',
                    scrub: 1,
                    onEnter: ()=> gsap.to(bullet,{scale:1,ease:"none"}),
                    onLeaveBack:()=> gsap.to(bullet,{scale:0,ease:"none"}),
                    invalidateOnRefresh: true
                })
            })

            return()=>{
                gsap.set(['.line-fill','.circle-fill',bullets],{clearProps: 'all'})
            }

        })
    })
    return (
        <section className="px-4 py-16 md:py-20 md:px-8" ref={sectionRef}>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">

                {/* title */}
                <div className="mb-12 container" ref={titleRef}>
                    <HeadingText block1="Our Journey" block2=" to Caladan" />
                </div>


                {/* timeline mob*/}
                <div className="grid grid-cols-[10%_90%] gap-x-2 gap-y-8 md:hidden">

                    <div
                        className="z-10 bg-[#0f4c81]/10 w-0.75 justify-self-center relative line-track-mobile"
                        style={{ gridColumn: 1, gridRow: `1 / ${timeline.length + 1}` }}
                    >
                        <div className="line-fill-mobile rounded-full absolute top-0 left-0 w-full h-full bg-[#0b1f33] origin-top scale-y-0">
                        </div>
                    </div>



                    {timeline.map((t, i) => (
                        <Fragment key={t.id}>
                            <div className="w-4 h-4 bg-[#0b1f33]/60 rounded-full col-start-1 justify-self-center relative mt-4 overflow-hidden circle-container" style={{ gridColumn: 1, gridRow: i + 1 }}>
                                <div className="absolute bg-[#0b1f33] h-full w-full circle-fill"></div>
                            </div>
                            <div style={{ gridColumn: 2, gridRow: i + 1 }}>
                                <div className="flex flex-col gap-4 pr-5">
                                    <div className="pb-4 border-b border-gray-300 flex justify-between items-center ">
                                        <h3 className="leading-8 text-[28px]">{t.title}</h3>
                                        <div className="text-xs leasing-3 font-medium">{t.date}</div>
                                    </div>
                                    <div className="mb-2.5">
                                        <p className="text-prim-btn/60">{t.descrip}</p>
                                    </div>
                                </div>

                            </div>
                        </Fragment>
                    ))}

                </div>

                {/* timeline md > */}
                <div className="hidden md:grid grid-cols-[40%_10%_%] gap-x-8 gap-y-20 lg:grid-cols-[45%_5%_%">
                    <div
                        className="z-10 bg-[#0b1f33]/10 w-0.75 justify-self-center col-start-2 row-start-1 row-end-5 relative line-container"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[#0b1f33] line-fill origin-top"></div>
                    </div>

                    {/* timeline main grid */}
                    {timeline.map((t, i) => (
                        <Fragment key={t.id}>
                            <div className="w-4 h-4 bg-[#0b1f33]/50 rounded-full overflow-hidden col-start-1 justify-self-center mt-4 circle-container relative" style={{ gridColumn: 2, gridRow: i + 1 }}>
                                <div className="bg-[#0b1f33] rounded-full absolute h-full w-full circle-fill"></div>
                            </div>

                            <div className={`${t.id === '1' && 'col-start-3 row-start-1'}${t.id === '2' && 'col-start-1 row-start-2'} ${t.id === '3' && 'col-start-3 row-start-3'} ${t.id === '4' && 'col-start-1 row-start-4'}`}>
                                <div className="flex flex-col gap-4 ">
                                    <div className="pb-5 border-b border-gray-300 flex gap-4 items-center ">
                                        <h3 className="leading-10 text-[2rem]">{t.title}</h3>
                                        <div className="text-base leasing-6 font-medium">{t.date}</div>
                                    </div>
                                    <div className="mb-2.5">
                                        <p className="text-prim-btn/60">{t.descrip}</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>

                    ))}

                </div>
            </div>
        </section >
    )
}

export default JournerySection