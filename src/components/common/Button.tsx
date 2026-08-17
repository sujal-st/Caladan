interface ButtonProps {
    label?: string;
    bg?: string
}

function Button({ label = "Book Now", bg = "" }: ButtonProps) {
    const style = {
        prim: "bg-prim-btn text-white",
        sec: "bg-gray-100 text-prim-btn",
    }
    return (
        <button className={`group rounded-full py-2.75 w-fit px-4 active:scale-90 transition-transform cursor-pointer ${bg === 'prim' ? style.prim : bg === "sec" ? style.sec : bg}`}>
            
            <div className="h-5 overflow-hidden">
                
                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                    <span className="whitespace-nowrap leading-5 text-[13px] font-medium lg:text-sm">
                        {label}
                    </span>
                    <span className="whitespace-nowrap leading-5 text-[13px] font-medium lg:text-sm">
                        {label}
                    </span>
                </div>
            </div>
        </button>
    )
}

export default Button


export function LightButton({ label = "Book Now" }: { label?: string }) {
    return (
        <button className="group bg-white text-prim-btn w-fit rounded-full py-2.75 px-4 active:scale-90 transition-transform cursor-pointer">
            <div className="h-5 overflow-hidden">
                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                    <span className="whitespace-nowrap leading-5 text-[13px] font-medium lg:text-sm">
                        {label}
                    </span>
                    <span className="whitespace-nowrap leading-5 text-[13px] font-medium lg:text-sm">
                        {label}
                    </span>
                </div>
            </div>
        </button>
    )
}