import Button from "@/components/common/Button"
import TitlePill from "@/components/common/TitlePill"

function CTASection() {
    return (
        <section className="py-8 px-3">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">
                <div className="px-5 py-24 flex flex-col gap-5 items-center bg-linear-to-bl from-[#0b1f336b] to-white">
                    <TitlePill label="Your Escape Awaits" />
                    <div>
                        <h2 className="leading-10 text-[36px] whitespace-nowrap md:leading-13 md:text-[48px]">
                            Last Rooms <span className="opacity-60"> This Month</span>
                        </h2>
                    </div>

                    <div>
                        <p className="leading-5 text-base text-prim-btn text-center md:leading-6">
                            Join thousands of travelers discovering turquoise lagoons, overwater sunrise yoga, and starlit beach dinners. Your perfect bungalow is waiting.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button label="Reserve Now" bg="prim"/>
                        <Button label="See All Rooms" bg="bg-gray-100 text-prim-btn" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
