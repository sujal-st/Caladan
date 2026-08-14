import CTATitle from "./CTATitle"

function CTASection() {
    return (
        <section className="py-8 px-3">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">
                <div className="px-5 py-24  bg-linear-to-bl from-[#0b1f336b] to-white">
                    <CTATitle/>
                </div>
            </div>
        </section>
    )
}

export default CTASection
