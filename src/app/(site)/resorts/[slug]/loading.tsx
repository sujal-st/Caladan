export default function Loading(){
    return(
        <section className="pt-24 pb-12 px-4 md:pt-30 md:pb-20 md:px-8 w-full h-full mx-auto">
            <div className="flex flex-col gap-4 items-center justify-center mx-auto">
                <div className="bg-gray-100 p-4 w-1/2"></div>
                <div className="bg-gray-100 p-4 w-1/2"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 mx-auto">
                <div className="rounded-lg bg-gray-100 w-150 h-100"/>
                <div className="rounded-lg bg-gray-100 w-150 h-100"/>
                <div className="rounded-lg bg-gray-100 w-150 h-100"/>
                <div className="rounded-lg bg-gray-100 w-150 h-100"/>

            </div>
        </section>
    )
}