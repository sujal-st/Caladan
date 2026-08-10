import HeadingText from "@/components/common/HeadingText"
import { Fragment } from "react/jsx-runtime"

function JournerySection() {
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
    return (
        <section className="px-4 py-16 md:py-20 md:px-8">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">

                {/* title */}
                <div className="mb-12">
                    <HeadingText block1="Our Journey" block2=" to Caladan" />
                </div>


                {/* timeline mob*/}
                <div className="grid grid-cols-[10%_90%] gap-x-2 gap-y-8 md:hidden">
                    {/* <div className="hidden md:flex" style={{gridColumn:1}}></div> */}

                    <div
                        className="z-10 bg-[#0f4c81]/10 w-0.75 justify-self-center"
                        style={{ gridColumn: 1, gridRow: `1 / ${timeline.length + 1}` }}
                    />



                    {timeline.map((t, i) => (
                        <Fragment key={t.id}>
                            <div className="w-4 h-4 bg-[#0f4c81] rounded-full col-start-1 justify-self-center mt-4" style={{ gridColumn: 1, gridRow: i + 1 }}></div>
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
                        className="z-10 bg-[#0f4c81]/10 w-0.75 justify-self-center col-start-2 row-start-1 row-end-5"
                    />

                    {/* timeline main grid */}
                    {timeline.map((t,i) => (
                        <Fragment key={t.id}>
                            <div className="w-4 h-4 bg-[#0f4c81] rounded-full col-start-1 justify-self-center mt-4" style={{ gridColumn: 2, gridRow: i + 1 }}></div>

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