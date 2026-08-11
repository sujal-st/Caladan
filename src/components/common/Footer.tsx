'use client'
import { useState } from 'react';
import RTArrow from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { plexMono } from "../../llib/font"


export interface ListProps {
    m: any;
    st?: string;
}

export function DropDown({ l, st = 'text-white' }: any) {
    return (
        <div className={`min-h-0 w-full`}>
            {l.map((l: any) => (
                <div key={l.id} className={`leading-5 text-base font-medium ${st}`}>
                    {l.label}
                </div>
            ))}
        </div>
    )
}

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
function Footer() {
    const rightMenu = [
        {
            id: '1', title: "company", list: [
                { id: "1", label: "Home A" },
                { id: "2", label: "Home B" },
                { id: "3", label: "Home C" },
                { id: "4", label: "About us" },
                { id: "5", label: "Contact A" },
                { id: "6", label: "Contact B" },
                { id: "7", label: "Contact C" },
            ]
        },
        {
            id: '2', title: "other pages", list: [
                { id: "1", label: "Resorts" },
                { id: "2", label: "Single Resort" },
                { id: "3", label: "Gallery" },
                { id: "4", label: "Blog A" },
                { id: "5", label: "Blog B" },
                { id: "6", label: "Blog C" },
            ]
        },
        {
            id: '3', title: "template", list: [
                { id: "1", label: "Style Guide" },
                { id: "2", label: "Changelog" },
                { id: "3", label: "Licenses" },
                { id: "4", label: "404" },
                { id: "5", label: "Password" },
                { id: "6", label: "More Templates" },
            ]
        },
    ]
    return (
        <footer className="w-full p-3 md:p-4">
            <div className="py-8 rounded-2xl bg-[#071522] max-w-100 min-[426px]:max-w-158 md:max-w-187 lg:max-w-337.5 mx-auto relative overflow-hidden md:py-12">

                <div className="px-4 md:px-8 relative">
                    {/* top */}
                    <div className="flex flex-col gap-14 lg:flex-row">
                        {/* up */}
                        <div className='flex flex-col gap-6 md:w-1/2 lg:w-1/3'>
                            <div className="text-white leading-8 text-[28px] md:text-[32px] md:leading-10">
                                <h2>Stay connected with what actually matters</h2>
                            </div>
                            <div className='text-dark-sec flex flex-col gap-2'>
                                <div className='flex justify-between bg-[rgba(10, 31, 51, 0.639)] bg-gray-800 items-center rounded-xl px-3 py-2 md:px-4 md:py-3 w-full'>
                                    <input type="email" name="" placeholder="Your email.." className='text-dark-sec focus:outline-none leading-5 text-base md:leading-6' />
                                    <RTArrow />
                                </div>
                                <div>
                                    <p className='text-sm leading-4 lg:whitespace-nowrap'>
                                        No spam. Just quality content and occasional updates.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* down */}
                        <div className='flex flex-col text-dark-sec text-xs leading-3 font-medium md:flex-row md:gap-4 w-full'>
                            {rightMenu.map((m) => (
                                <List key={m.id} m={m} />
                            ))}
                        </div>
                    </div>

                    {/* mid */}
                    <div className="flex flex-col mt-14 mb-6 pt-4 border-t border-gray-800 text-dark-sec leading-4 text-sm justify-start gap-5 z-10 md:flex-row md:justify-between md:mt-40 md:mb-8 md:pt-5">
                        <div>
                            Caladan™. All rights reserved. © 2026
                        </div>
                        <div>
                            Made by Eclipso Studio with Webflow
                        </div>
                    </div>

                    {/* bot logo */}
                    <div className='relative overflow-hidden flex md:justify-center w-full z-10'>
                        <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69837f6cef3b944eb4c4c54a_Caladan%E2%84%A2-light.svg" alt="" className='h-full w-full' />
                    </div>
                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/698394b9a5e52084acf76841_palm.svg" alt="" className='absolute z-0 -bottom-37.5 -right-25 scale-x-[-1] w-[320px] h-125 opacity-15 text-gray-800 pointer-events-none h-full' />
                    <div className='absolute -bottom-8 inset-x-0 z-30 h-20 bg-linear-to-t from-[#071522] to-transparent' />
                </div>

            </div>


        </footer>
    )
}

export default Footer
