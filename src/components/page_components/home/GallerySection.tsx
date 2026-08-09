import HeadingText from '@/components/common/HeadingText'
import TitlePill from '@/components/common/TitlePill'
import React from 'react'

function GallerySection() {
    return (
        <section className='py-12 px-4 md:py-20 md:px-8'>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">

                {/* title */}
                <div className='flex flex-col items-center gap-5 mb-12 max-w-83 mx-auto md:mb-16 md:max-w-180'>
                    <TitlePill label="lagoon's living breath" />
                    <div>
                        <HeadingText block1='Wellness Floats on' block2='Reef Dreams' />
                    </div>
                    <div className='md:max-w-141'>
                        <p className='text-center text-prim-btn/60 text-base leading-5 md:leading-6'>ICaladan's overwater sanctuary fuses Tahitian whispers with tide-pulse rituals — where couples entwine in lomilomi waves, families hum with crystal ocean songs, and solo souls dissolve into reef reverie. Your rebirth hovers above paradise.</p>
                    </div>

                </div>


                {/* gallery */}
                <div className='grid grid-cols-3 gap-2 md:gap-4'>

                    <div className='max-h-40 h-40 rounded-lg overflow-hidden self-end md:min-h-75'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd55a63aed167c4742_pexels-alohaphotostudio-6961666.avif" alt=""  className='h-full w-full object-cover'/>
                    </div>
                    <div className='max-h-44 h-44 rounded-lg overflow-hidden md:min-h-88'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aeefb3fde379b25ebbe105_pexels-stijn-dijkstra-1306815-29989229.avif" alt="" className='object-cover h-full w-full object-center' />
                    </div>
                    <div  className='max-h-40 h-40 rounded-lg overflow-hidden self-end md:min-h-75'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdfb59242c63856bad_pexels-jonathanborba-13911220%20(1).avif" alt=""  className='h-full w-full object-cover'/>
                    </div>
                    <div  className='max-h-40 h-40 rounded-lg overflow-hidden md:min-h-75'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className='max-h-44 h-44 rounded-lg overflow-hidden md:min-h-88'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif" alt="" className='object-cover h-full w-full object-center' />
                    </div>
                    <div className='max-h-40 h-40 rounded-lg overflow-hidden md:min-h-75'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69a9746c7ab6e4371c4aae70_pexels-saeb-mahajna-14125913-6297105.avif" alt=""  className='h-full w-full object-cover'/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GallerySection
