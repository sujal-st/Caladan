import { resorts } from "@/components/constants/data";
import { ResortCard } from "./ReefTitle";
import ReefTitle from "./ReefTitle";

export interface resort {
    id: string;
    slug: string;
    img: string;
    title: string;
    cat: string;
    size: string;
    beds: number;
    guests: number
}
export interface ResortCardProps {
    resort: resort;
}

function ReefSection() {
    return (
        <section className="py-12 px-4 md:py-20 md:px-8">
            <div className="h-full max-w-105 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto">
                <ReefTitle />
                {/* resorts list */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 w-full">
                    {resorts.map((resort) => (
                        <ResortCard key={resort.id} resort={resort} />
                    )).slice(0, 3)
                    }
                </div>
            </div>
        </section >
    )
}

export default ReefSection
