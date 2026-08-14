import Image from "next/image"


function CommonSection() {
    return (
        <section className="px-4 py-12 md:px-8 md:py-20">
            <div className="container mx-auto lg:max-w-300">

                {/* title */}
                <div>
                    <h2 className="mt-5 mb-2.5 leading-9 text-[32px] text-prim-btn md:leading-11 md:text-[40px]">
                        When Tahiti Lights Up Underwater
                    </h2>
                    <p className="mb-2.5 leading-5 md:leading-6">
                        Imagine slipping into warm lagoon waters as the sun dips below the horizon. Suddenly, your mask reveals a secret world — corals pulsing with neon glow, tiny plankton sparking like underwater fireworks, and gentle reef sharks gliding past like shadows. This is night snorkeling at Caladan, and it's our most requested experience.
                    </p>
                </div>

                <div className="pt-5 mb-2.5 leading-5 text-base md:leading-6">
                    <p>
                        <strong>Why Night Snorkeling Changes Everything</strong>
                        <br />
                        Daytime reefs show color. Night reveals <em>life</em>. Octopus change color to hunt. Parrotfish sleep in mucus cocoons. Moray eels emerge from their lairs. The reef transforms from postcard-pretty to living, breathing theater.
                    </p>
                </div>

                <div className="pt-5 mb-5 leading-5 text-base md:leading-6">
                    <p className=""><strong>Our 3 Best Night Spots (Guest Access Only)</strong></p>
                    <ol className="pl-10 list-decimal">
                        <li><strong>Manta Point</strong> (5 min by boat) — Up to 15 manta rays feed on plankton</li>
                        <li><strong>Caladan Coral Garden</strong> (shore entry) — Perfect first-timers, knee-deep start</li>
                        <li><strong>Black Tip Alley</strong> (15 min paddle) — 8-12 reef sharks patrol nightly</li>
                    </ol>
                </div>

                <div className="pt-5 mb-2.5 relative min-w-98 min-h-56 rounded-lg overflow-hidden md:min-h-99">
                    <Image src="/images/dummy.avif" alt="img" fill className="object-cover" loading="eager" />
                </div>
                <div className="pt-5 mb-2.5 leading-5 text-base md:leading-6">
                    <p className="mb-2.5"><strong>What to Expect (Our Guest Timeline)</strong></p>
                    <ul className="list-disc pl-10">
                        <li><em>6:45 PM:</em> Lantern-lit beach briefing + gear fitting</li>
                        <li><em>7:15 PM:</em> Guided entry with 2 marine biologists</li><li><em>8:30 PM:</em> Fresh towels + post-swim mai tais</li>
                        <li><em>9:00 PM:</em> Back at your bungalow, glowing with memories</li>
                    </ul>
                </div>

                <div className="pt-5 mb-2.5 leading-5 text-base md:leading-6">
                    <p className="mb-2.5"><strong>Pro Tips from Your Guides</strong></p>
                    <ul className="list-disc pl-10">
                        <li>Wear rash guards (water feels cooler after sunset)</li><li>Skip heavy dinners — snorkeling + rum punch = bliss</li>
                        <li>Bring your phone in a waterproof case (those shark videos!)</li>
                        <li>Best months: April-October (calmest seas)</li>
                    </ul>
                </div>

                <div className="pt-5 mb-2.5 leading-5 text-base md:leading-6">
                    <p>
                        <strong>Book Your Night Swim</strong>
                        <br />Spaces limited to 6 guests per night. Includes all gear, marine biologists, and return boat transfer. €95/person or complimentary for 7+ night stays.
                    </p>
                </div>

                <div className="pt-5 leading-5 text-base md:leading-6">
                    <p><strong>Ready to see Tahiti glow?</strong><br/>[<strong>Book Night Snorkel</strong>] <em>Next Tour: Tomorrow 6:45 PM</em></p>
                </div>

            </div>

        </section>
    )
}

export default CommonSection
