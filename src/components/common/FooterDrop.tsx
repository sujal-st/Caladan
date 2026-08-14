'use client'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { ListProps } from './Footer';
import { plexMono } from "../../llib/font";
import { DropDown } from './Footer';

export function List({ m, st }: ListProps) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`py-5 border-b border-gray-800 md:border-none ${plexMono.variable} transition-all duration-300 md:flex-1 gap-4`}>
            <div className="flex flex-col md:gap-6">
                <div className='flex justify-between items-center'>
                    <div className='md:leading-4'>
                        {m.title.toUpperCase()}
                    </div>
                    <button className="md:hidden h-5 w-5 transition-all duration-300" onClick={() => { setToggle(prev => !prev); console.log(m.id) }}>
                        {toggle ? (
                            <RemoveIcon className='h-full! w-full! text-white!' />
                        ) : (
                            <AddIcon className='h-full! w-full! text-white!' />
                        )}
                    </button>

                </div>

                <div className={`${toggle ? 'grid-rows-[1fr] opacity:100' : 'grid-rows-[0fr] opacity:0'} grid gap-2 transition-all duration-300 overflow-hidden w-full md:hidden`}>
                    <DropDown l={m.list} st={st} />
                </div>


                <div className='hidden md:flex flex-col gap-3 w-full'>
                    {
                        m.list.map((l: { id: string; label: string }) => (
                            <div key={l.id} className='leading-5 text-base font-medium text-white md:leading-6'>
                                {l.label}
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}