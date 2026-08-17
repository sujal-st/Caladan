import HeadingText from '@/components/common/HeadingText'
import { resorts } from '@/components/constants/data'
import { ResortCard } from '../../home/ReefTitle'

function MoreAccomodation() {
    return (
        <section className='py-12 px-4 md:py-20 md:px-8'>
            <div className='container'>
                <div className='mb-8 md:mb-12'>
                    <HeadingText block1='More ' block2='Accomodations' align='text-left' />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
                    {resorts.map((resort) => (
                        <ResortCard key={resort.id} resort={resort} />
                    )).slice(1, 3)
                    }
                </div>
            </div>
        </section>
    )
}

export default MoreAccomodation
