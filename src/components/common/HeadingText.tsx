import React from 'react'

function HeadingText({block1, block2}:{block1:string, block2:string}) {
    return (
        <div>
            <h2 className="leading-10 text-[36px] whitespace-nowrap md:leading-13 md:text-[48px]">
                {block1} <span className="opacity-60"> {block2}</span>
            </h2>
        </div>
    )
}

export default HeadingText
