import getResorts from '@/llib/api/getResorts'
import { ResortCard } from "./ReefTitle";
import ReefTitle from "./ReefTitle";

export interface resort {
    _id: string;
    slug: object;
    img: string;
    title: string;
    description: string;
    cat: string;
    size: string;
    beds: number;
    guests: number
}
export interface ResortCardProps {
    resort: resort;
}

async function ReefSection() {
    const resorts=await getResorts();
    return (
        <section className="py-12 px-4 md:py-20 md:px-8">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">
                <ReefTitle />
                {/* resorts list */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 w-full">
                    {resorts.map((resort:resort) => (
                        <ResortCard key={resort._id} resort={resort} />
                    )).slice(0, 3)
                    }
                </div>
            </div>
        </section >
    )
}

export default ReefSection
