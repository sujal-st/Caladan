import type { resort } from "../../home/ReefSection";
import TopImage from "./TopImage";
import { amenities } from "./data";
import Image from "next/image";
import { reviews } from "@/components/constants/data";
import { Fragment } from "react/jsx-runtime";
import StarIcon from '@mui/icons-material/Star';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { ReviewCardProps } from "@/components/constants/types";
import GallerySection from "./GallerySection";
import FAQ from "./FAQ";
import { DateField, DropDown } from "../../inquiry/TextInput";

interface TopImageProps {
    resort?: resort
}

function ReservationForm({ resort }: TopImageProps) {
    return (
        <div className="bg-gray-100 p-5 rounded-lg flex flex-col gap-6 lg:w-[50%] lg:sticky top-30 h-full">
            <div className="text-prim-btn leading-8 text-[28px] md:leading-10 md:text-[32px]">
                Reserve This Resort
            </div>

            <form action="" className="flex flex-col gap-5">
                <DropDown values={[1, 2, 3]} required={true} label="adults" sty='w-full' />

                <div className="flex flex-col gap-5 w-full">
                    <DateField label="check-in date" required={true} name="check-in" sty='w-full' />
                    <DateField label="check-out date" required={true} name="check-out" sty='w-full' />
                </div>

                {/* info */}
                <div className="flex flex-col gap-3">
                    <div className="text-base leading-6 font-medium md:leading-7 md:text-[20px]">
                        Room Summary
                    </div>
                    <div className="grid grid-cols-2 gap-2 justify-start lg:gap-3 flex-wrap">
                        <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                            <img src="/area.svg" alt="" />
                            {resort!.size}
                        </div>
                        <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bath-bubble-icon lucide-bath-bubble"
                            >
                                <path d="M15 3h.01" />
                                <circle cx="11.5" cy="6.5" r=".5" />
                                <circle cx="16.5" cy="7.5" r=".5" />
                                <path d="M2 12h6" />
                                <path d="M13 15H8v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1Z" />
                                <path d="M13 12h9" />
                                <path d="M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                <path d="M7 19v2" />
                                <path d="M17 19v2" />
                            </svg>
                            2 Bathrooms
                        </div>
                        <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                            <HotelOutlinedIcon className="h-6! w-6!" />
                            {resort!.beds} Beds
                        </div>
                        <div className="flex items-center gap-2 leading-5 text-base md:leading-6">
                            <PeopleAltOutlinedIcon className="h-6! w-6!" />
                            {resort!.guests} Guests
                        </div>
                    </div>
                </div>

                <div className="text-prim-btn leading-9 text-[32px]">
                    $1,520 <span className="text-prim-btn/60 leading-5 text-base">/night</span>
                </div>

                <button type='submit' className='bg-prim-btn text-white whitespace-nowrap leading-5 text-[13px] font-medium  lg:text-sm opacity-100 rounded-full py-2.75 px-4'>Send Inquiry</button>

            </form>

        </div>
    )
}

function ReviewCard({ r }: ReviewCardProps) {
    return (
        <div className='card-container flex flex-col gap-3 w-full md:max-h-67.5 min-w-98.25'>

            <div className='container-up p-5 bg-gray-100 rounded-lg w-full h-full flex flex-col gap-8 md:h-120 overflow-hidden md:p-6'>
                <div className='star-txt flex flex-col gap-6 h-full flex-1 md:gap-8'>
                    <div className='flex items-center gap-1'>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Fragment key={i}>
                                <StarIcon className='text-yellow-700! h-5!' />
                            </Fragment>
                        ))
                        }
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='text-prim-btn leading-6 text-base font-semibold md:text-xl md:leading-7 md:font-medium'>
                            {r.review.title}
                        </div>
                        <div className='leading-5 text-base text-prim-btn/60 md:leading-6'>
                            {r.review.description}
                        </div>
                    </div>
                </div>
                <div className='card-name flex flex-col'>
                    <div className='leading-5 text-base font-semibold text-prim-btn md:leading-6'>
                        {r.name}
                    </div>
                    <div className='leading-5 text-base text-prim-btn/60 md:leading-6'>
                        {r.profession}
                    </div>

                </div>
            </div>
        </div>
    )
}
function TopSection({ resort }: TopImageProps) {
    return (
        <section className="pt-24 pb-12 px-4 md:pt-30 md:pb-20 md:px-8 w-full h-full mx-auto">

            <div className="container relative flex flex-col gap-6 lg:gap-8 w-full h-full lg:flex-row">

                <div className="flex flex-col gap-8 md:gap-12 w-full h-full lg:w-[60%]">

                    <TopImage resort={resort!} />

                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="text-[32px] leading-9 md:text-[40px] md:leading-11 text-prim-btn">Reef Whisper Suite</h1>
                        </div>

                        <div className="text-prim-btn/60 leading-5 text-base md:leading-6">
                            <p>Glass-floor haven for couples, floating above turtle paths. Private yoga deck catches dawn light, while your personal lomilomi table overlooks sleeping parrotfish. Intimate luxury where the sea whispers renewal.</p>
                        </div>

                    </div>

                    <div className="flex flex-col gap-3 md:gap-4">
                        <div className="text-prim-btn leading-6 text-base font-medium md:text-[20px] md:leading-7">Amenities</div>
                        <div className="grid grid-cols-[1fr_1fr] gap-x-3 gap-y-2 md:gap-y-3 md:gap-x-4 md:grid-cols-[1fr_1fr_1fr]">
                            {amenities.map((a) => (

                                <div key={a.id} className="grid-list-item">
                                    <div className="flex gap-2 items-center justify-start">
                                        <div className="relative h-6 w-6">
                                            <Image src={a.icon} alt={a.label} fill />
                                        </div>
                                        <div>
                                            <p className="text-base leading-5 md:leading-6">
                                                {a.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="font-medium text-prim-btn leading-6 text-base">Reviews</div>
                        <div>
                            {
                                reviews.map((r) => (
                                    <ReviewCard key={r.id} r={r} />
                                )).slice(0, 1)
                            }
                        </div>
                    </div>

                    <GallerySection />

                    <FAQ />

                </div>

                {/* booking form */}
                <ReservationForm resort={resort} />

            </div>

        </section>
    )
}

export default TopSection
