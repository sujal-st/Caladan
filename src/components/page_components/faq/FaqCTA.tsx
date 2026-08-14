import { LightButton } from "@/components/common/Button"
import TitlePill from "@/components/common/TitlePill"
import Image from "next/image"
import { FAQComp } from "../about/FAQAbout"
import { list } from '@/components/constants/data';



function FaqCTA() {
    return (
        <section className="pt-24 pb-16 px-4 md:pt-40 md:pb-30 md:px-8">

            <div className="container mx-auto relative grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:gap-8">

                {/* top */}
                <div className="lg:sticky top-30 lg:w-full self-start">
                    <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:flex-col">
                        <div className="flex flex-col gap-6 md:w-1/2 md:gap-8">
                            <TitlePill label="your tropical questions answered" />
                            <h2 className="leading-13 text-[48px] text-prim-btn md:leading-17 md:text-[64px]">
                                Frequently Asked <span className="text-prim-btn/60">
                                    Questions
                                </span>
                            </h2>
                        </div>

                        <div className="relative max-h-54 h-54 min-w-95 rounded-xl overflow-hidden md:max-h-auto md:min-h-83 md:w-82 md:min-w-auto">
                            <div className="absolute bottom-0 w-full h-50 bg-linear-to-t from-prim-btn to-transparent -z-1 md:h-70" />
                            <Image src='/images/faq-cta.avif' loading="eager" alt="faq-cta" fill sizes="(max-width: 768px) 392px, 328px" className="object-cover -z-2" />

                            <div className="p-5 flex flex-col gap-5 h-full justify-end md:p-6 md:gap-6">
                                <div className="text-white leading-5 text-base md:leading-6">Still have questions? Our team is here to help craft your perfect Caladan experience.</div>
                                <LightButton label="Contact us" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* bottom */}
                <div className="flex flex-col gap-14">

                    {/* abt caladan */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        <h2 className="text-[32px] leading-9 md:leading-11 md:text-[40px]">
                            About Caladan
                        </h2>

                        <FAQComp list={list} />
                    </div>
                    {/* abt caladan */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        <h2 className="text-[32px] leading-9 md:leading-11 md:text-[40px]">
                            Events & Weddings
                        </h2>

                        <FAQComp list={list} />
                    </div>
                    {/* abt caladan */}
                    <div className="flex flex-col gap-8 md:gap-12">
                        <h2 className="text-[32px] leading-9 md:leading-11 md:text-[40px]">
                            Booking Process
                        </h2>

                        <FAQComp list={list} />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default FaqCTA
