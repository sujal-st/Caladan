
interface ButtonProps{
    label?: string;
    bg?: string
}
function Button({ label = "Book Now", bg="" }: ButtonProps) {
    const style={
        prim: "bg-prim-btn text-white",
        sec: "bg-gray-100 text-prim-btn",
    }
    return (
        <button className={`w-full rounded-full py-2.75 px-4 ${bg==='prim'?style.prim:bg==="sec"?style.sec:bg}`}>
            <div className="whitespace-nowrap leading-5 text-[13px] font-medium  lg:text-sm opacity-100">
                {label}
            </div>
        </button>
    )
}

export default Button


export function LightButton({label="Book Now"}:{label?:string}){
    return(
        <button className="bg-white text-prim-btn w-full rounded-full py-2.75 px-4">
            <div className="whitespace-nowrap leading-5 text-[13px] font-medium lg:text-sm">
                {label}
            </div>
        </button>
    )
}