import TitlePill from "@/components/common/TitlePill"
import { FAQDropdown } from "../home/FAQSection"
import HeadingText from "@/components/common/HeadingText"

function FAQAbout() {
    const list = [
        { id: "1", title: "What makes Caladan different from other beach resorts?", description: "Add answer here." },
        { id: "2", title: "Do you offer all-inclusive vacation packages?", description: "Add answer here." },
        { id: "3", title: "What activities are available at the resort?", description: "Add answer here." },
        { id: "4", title: "Do you accommodate special dietary needs?", description: "Add answer here." },
        { id: "5", title: "Can I host events or weddings at Caladan?", description: "Add answer here." },
        { id: "6", title: "What payment methods do you accept?", description: "Add answer here." },
        { id: "7", title: "Is there free Wi-Fi at Caladan?", description: "Add answer here." },
    ]
    return (
        <section className="py-12 px-4 md:mx-8 md:py-20">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">


                {/* title */}
                <div className="flex flex-col items-center gap-5 mb-12">
                    <TitlePill label="island essential"/>
                    <div>
                        <HeadingText block1="Your Stay," block2="Answeered"/>
                    </div>

                </div>

                {/* tabs */}
                <div className='flex flex-col gap-3 md:gap-4'>
                    {list.map((li) => (

                        <FAQDropdown key={li.id} li={li} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default FAQAbout

