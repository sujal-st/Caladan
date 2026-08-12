import HeadingText from '@/components/common/HeadingText'
import TitlePill from '@/components/common/TitlePill';
import { resorts } from '@/components/constants/data';
import { ResortCard } from '../home/ReefSection'

function ResortsList() {
    return (
        <section className='px-4 pt-24 pb-12 md:pt-40 md:pb-20 md:px-8'>
            <div>

                {/* title */}
                <div className='flex flex-col items-center gap-5 mb-12'>
                    <TitlePill label='overwater collection' />
                    <div>
                        <h2 className='text-prim-btn text-[48px] leading-13 text-center'>Choose Your <span className='text-prim-btn/60'>Lagoon</span> Sanctuary</h2>
                    </div>
                </div>


                {/* grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-3">
                    {resorts.map((resort) => (
                        <ResortCard key={resort.id} resort={resort} />
                    ))
                    }
                </div>

            </div>

        </section>
    )
}

export default ResortsList
