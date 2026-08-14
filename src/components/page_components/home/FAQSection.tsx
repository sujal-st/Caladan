'use client';
import HeadingText from '@/components/common/HeadingText'
import TitlePill from '@/components/common/TitlePill';
import FAQTab from './FAQTab';
function FAQSection() {
    return (
        <section className='py-20 p-3 md:px-8'>
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 xl:max-w-350 mx-auto rounded-2xl overflow-hidden xl:flex xl:flex-col min-[1025px]:items-center">

                    <div className='flex flex-col items-center gap-5 mb-12 md:mb-16'>
                        <TitlePill label='island essential' />
                        <HeadingText block1='Your Stay, ' block2='Answered' />
                    </div>
                    <FAQTab/>
            </div>
        </section>
    )
}

export default FAQSection
