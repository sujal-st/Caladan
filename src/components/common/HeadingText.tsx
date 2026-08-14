
function HeadingText({block1, block2, align="text-center"}:{block1:string, block2:string, align?:string}) {
    return (
        <div>
            <h2 className={`leading-10 text-[36px] md:leading-13 md:text-[48px] ${align}`}>
                {block1} <span className="opacity-60"> {block2}</span>
            </h2>
        </div>
    )
}

export default HeadingText
