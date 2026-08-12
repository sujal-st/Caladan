
function TitlePill({label,type='default'}:{label:string,type?:string}) {
  const bg=type!='default'?'bg-gray-700/60 text-white':'bg-gray-200 text-prim-btn';
  return (
    <div className={`p-2 flex justify-center items-center w-fit rounded-full leading-2.5 text-[10px] font-mono font-semibold md:leading-3 ${bg}`}>
        {label.toUpperCase()}
    </div>
  )
}

export default TitlePill
