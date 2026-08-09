import Button from "@/components/common/Button";
import HeadingText from "@/components/common/HeadingText";
import TitlePill from "@/components/common/TitlePill";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


interface resort {
    id: string;
    img: string;
    title: string;
    cat: string;
    size: string;
    beds: number;
    guests: number
}
interface ResortCardProps{
    resort:resort;
}
function ResortCard({ resort }: ResortCardProps) {
    return (
        <div className="resort-card flex flex-col gap-3 md:gap-4 lg:max-w-77.5">

            {/* img */}
            <div className="relative h-64 max-h-64 rounded-2xl overflow-hidden md:max-h-96 md:h-96">
                <img src={resort.img} alt={resort.title} className="h-full w-full object-cover" />
                <div className="absolute top-5 left-5 z-11 md:top-6 md:left-6">
                    <TitlePill label={resort.cat} type="card-label"/>
                </div>
                <div className="w-full h-full bg-black/20 inset-0 absolute z-10"></div>
            </div>


            <div className="flex flex-col gap-3">
                <div className="text-base leading-6 font-medium md:leading-7 md:text-[20px]">
                    {resort.title}
                </div>
                <div className="flex items-center gap-2 justify-start lg:gap-3 flex-wrap">
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <img src="/area.svg" alt="" />
                        {resort.size}
                    </div>
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <HotelOutlinedIcon className="h-6! w-6!"/>
                        {resort.beds} Beds
                    </div>
                    <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                        <PeopleAltOutlinedIcon className="h-6! w-6!"/>
                        {resort.guests} Guests
                    </div>
                </div>
            </div>

        </div>
    )
}
function ReefSection() {

    const resorts: resort[] = [
        {
            id: '1',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b049a16076b1b2188d012d_rumman-amin-s3o2rkTkF7I-unsplash.avif',
            title: 'Lagoon Harmony Bungalow',
            cat: 'Overwater Bungalow',
            size: '90 ft2',
            beds: 2,
            guests: 6,
        },
        {
            id: '2',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b037b7b9f0bc0f27d8889d_dinuka-lankaloka-HKr5cn6S0q0-unsplash.avif',
            title: 'Coral Breath Studio',
            cat: 'Overwater Studio',
            size: '156 ft2',
            beds: 2,
            guests: 4,
        },
        {
            id: '3',
            img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b03783cb355b95794c522e_pexels-roman-odintsov-5667901.avif',
            title: 'Tide Song Villa',
            cat: 'Overwater Villa',
            size: '320 ft2',
            beds: 4,
            guests: 12,
        },
    ]
    return (
        <section className="py-12 px-4 md:py-20 md:px-8">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">

                {/* title  */}
                <div className="mb-12 flex flex-col gap-6 md:gap-8 md:mb-16 lg:flex-row lg:items-end">

                    <div className="flex flex-col gap-5 md:gap-6">
                        <HeadingText block1="Reefside" block2="Sanctuaries" align='text-left' />
                        <div>
                            <p>Glass floors pulse with parrotfish dawn colors. Private decks sip Tahiti's tides. Discover our floating havens where lagoon rhythms compose your perfect wellness escape.</p>
                        </div>
                    </div>
                    <Button label="See All Resorts" bg="sec" />
                </div>


                {/* resorts list */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
                    {resorts.map((resort) => (
                        <ResortCard key={resort.id} resort={resort}/>
                    ))
                    }
                </div>
            </div>
        </section >
    )
}

export default ReefSection
