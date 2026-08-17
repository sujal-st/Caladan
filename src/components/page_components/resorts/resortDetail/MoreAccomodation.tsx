import HeadingText from '@/components/common/HeadingText'

import { ResortCard } from '../../home/ReefTitle'
import { resort } from '../../home/ReefSection'
import getResorts from '@/llib/api/getResorts'

async function MoreAccomodation() {
    const resorts:resort[]= await getResorts();
    return (
        <section className='py-12 px-4 md:py-20 md:px-8'>
            <div className='container'>
                <div className='mb-8 md:mb-12'>
                    <HeadingText block1='More ' block2='Accomodations' align='text-left' />
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
                    {resorts.map((resort) => (
                        <ResortCard key={resort._id} resort={resort} />
                    )).slice(1, 3)
                    }
                </div>
            </div>
        </section>
    )
}

export default MoreAccomodation
