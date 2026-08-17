'use client';
import TitlePill from "@/components/common/TitlePill";
import type { resort } from "../../home/ReefSection";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { gsap, useGSAP } from '@/llib/gsap';
import { useRef, useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";


interface TopImageProps {
    resort: resort
}

const galleryImages = [
    'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e4994822e17b6f0992_pexels-ksu-eli-studio-78564297-9116633.avif',
    'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e43f566491a0dc0953_pexels-leorossatti-2598638.avif',
    'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4e4dee9b8f08dc2f5be_pexels-stijn-dijkstra-1306815-29989229.avif',
]

function TopImage({ resort }: TopImageProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useGSAP(() => {
        const img = gsap.utils.toArray<HTMLElement>('.img');

        img.forEach((i) => {
            gsap.set(i, { scale: 1.2 });

            gsap.to(i, {
                yPercent: 10,
                scrollTrigger: {
                    trigger: i,
                    start: 'top center',
                    scrub: true
                }
            })
        })
    }, { scope: sectionRef });

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (activeIndex === null) return;
            if (e.key === "Escape") setActiveIndex(null);
            if (e.key === "ArrowRight") setActiveIndex((prev) => prev === null ? null : (prev + 1) % galleryImages.length);
            if (e.key === "ArrowLeft") setActiveIndex((prev) => prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length);
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex]);

    useEffect(() => {
        document.body.style.overflow = activeIndex !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [activeIndex]);

    return (
        <div className="relative min-h-80 min-w-98.25 overflow-hidden rounded-lg p-5 h-full md:w-full" ref={sectionRef}>
            <Image src={urlFor(resort.img).width(800).height(600).url()} alt={resort.title} sizes="(max-width: 768px) 100vw, 704px" fill className="object-cover h-full w-full -z-1 img" />
            <div className="absolute inset-0 h-full flex flex-col justify-between p-5 md:flex-row md:items-end">
                <TitlePill label={resort.cat} />

                {/* sub gallery */}
                <div className="relative p-3 rounded-lg border border-gray-50 flex items-center gap-2 w-fit">
                    <div className="absolute inset-0 bg-white/30"></div>

                    {galleryImages.map((src, i) => (
                        <button
                            key={src}
                            onClick={() => setActiveIndex(i)}
                            className="w-15.5 h-11.5 relative rounded-lg overflow-hidden cursor-pointer md:min-h-19.5 md:min-w-29.5"
                        >
                            <Image
                                src={src}
                                alt={`${resort.title} gallery ${i + 1}`}
                                fill
                                fetchPriority="high"
                                sizes="(max-width: 768px) 62px, 118px"
                                className="img object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* lightbox */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setActiveIndex(null)}
                >
                    <button
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-4 right-4 text-white cursor-pointer"
                        aria-label="Close"
                    >
                        <CloseIcon className="h-8! w-8!" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length); }}
                        className="absolute left-4 text-white cursor-pointer"
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="h-10! w-10!" />
                    </button>

                    <div
                        className="relative h-full max-h-[85vh] w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[activeIndex]}
                            alt={`${resort.title} gallery ${activeIndex + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => prev === null ? null : (prev + 1) % galleryImages.length); }}
                        className="absolute right-4 text-white cursor-pointer"
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="h-10! w-10!" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default TopImage