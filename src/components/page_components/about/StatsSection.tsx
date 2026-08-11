'use client';
import {gsap,useGSAP,ScrollTrigger} from '@/llib/gsap';
import { SplitText } from 'gsap/SplitText';

function StatsSection() {
    const stats=[
        {id:'1',value:'98%+',title:'Positive guest feedback',subtitle:'reflecting commitment to exceptional service'},
        {id:'2',value:'15+',title:'Years of expertise',subtitle:'in unforgettable island stays'},
        {id:'3',value:'2,500+',title:'Happy clients',subtitle:'trust us every year'},
    ]

    useGSAP(()=>{
        const split= SplitText.create('.title',{
            type: "words"
        })
        gsap.fromTo(split.words,{
            color:'#0b1f3360',
        },{
            color: '#0b1f33',
            stagger:0.01,
            scrollTrigger:{
                trigger: '.title',
                start: 'top 80%',
                scrub: true
            }
        })
    })
    return (
        <section className="px-4 py-16 md:px-8 md:py-30">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto rounded-2xl overflow-hidden">
            <div className="mb-20 border-t border-gray-300"></div>

                {/* title */}
                <div className="mb-12 title">
                    <h2 className="text-[32px] leading-9 md:text-[40px] md:leaidng-11 ">
                        Local marine guides lead night snorkels with glowing corals.Cultural nights bring fire dancing and third-generation Tahitian storytellers to your table.
                    </h2>
                </div>


                {/* stats grid */}
                <div className="grid grid-cols-1 gap-3 min-[426px]:grid-cols-2 md:gap-4 lg:grid-cols-3">
                    {
                        stats.map((s)=>(
                            <div key={s.id} className={`card bg-gray-100 p-5 rounded-lg min-h-64 flex flex-col justify-between md:min-h-90 ${s.id==='3'&&'max[768px]:col-start-1 max[768px]:col-end-3'}`}>
                                <div className="text-[56px] leading-16 md:text-[88px] md:leading-23">
                                    {s.value}
                                </div>

                                <div className="flex flex-col gap-1">
                                    <div className="text-prim-btn ledading-6 text-base font-medium md:leading-7 md:text-[20px]">{s.title}</div>
                                    <div className="text-prim-btn/60">{s.subtitle}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StatsSection
