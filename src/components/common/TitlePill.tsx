
function TitlePill({label}:{label:string}) {
  return (
    <div className="p-2 flex justify-center items-center w-fit bg-gray-200 text-prim-btn rounded-full leading-2.5 text-[10px] font-semibold md:leading-3">
        {label.toUpperCase()}
    </div>
  )
}

export default TitlePill
