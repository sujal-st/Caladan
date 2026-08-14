import Button from "@/components/common/Button"
import TitlePill from "@/components/common/TitlePill"
import Image from "next/image"
import Link from "next/link"


function NotFound() {
    return (
        <section className="px-4 pt-24 pb-6 md:px-8">
            <div className="mx-auto flex flex-col">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">

                    {/* left */}
                    <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
                        <TitlePill label="404" />

                        <div className="flex flex-col gap-3 items-center text-center md:items-start md:text-left md:Gap-4">
                            <h1 className="leading-13 text-[48px] text-prim-btn md:leading-17 md:text-[64px] ">You've drifted <span className="text-prim-btn/60">off course</span></h1>
                            <div>
                                <p className="leading-5">Looks like this page got swept away by the tide. Don’t worry, you can head back to the shore and keep exploring Caladan’s paradise.</p>
                            </div>
                        </div>
                        <Link href='/'>
                            <Button label="Sail back home" bg="bg-prim-btn text-white"/>
                        </Link>
                    </div>

                    {/* right */}
                    <div className="relative min-h-100 min-w-98 rounded-xl overflow-hidden md:h-146.75 md:min-w-85">
                        <Image src='/images/404.avif' alt='404 image' fill className="object-cover"/>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default NotFound
