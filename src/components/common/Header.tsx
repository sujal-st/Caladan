'use client';
import Link from "next/link";
import Button from "./Button";
import { LightButton } from "./Button";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import { Route } from "next";



interface subItem {
    id: string;
    label: string;
}

interface m {
    id: string;
    title: string;
    list?: subItem[];
    href: Route
}

export interface ListProps {
    m: m;
}

interface dropdownProps {
    l?: subItem[];
}
function DropDown({ l }: dropdownProps) {
    const hasList = (l?.length ?? 0) > 0;
    return (
        <div className="min-h-0 w-full">
            {l?.map((item) => (
                <div key={item.id} className="leading-5 text-base font-medium text-prim-btn">
                    {item.label}
                </div>
            ))}
        </div>
    );
}

function List({ m }: ListProps) {
    const [toggle, setToggle] = useState(false);

    return (
        <Link href={m.href} className={`py-5 border-b border-gray-200 ${toggle ? 'h-fit' : 'h-15 overflow-hidden'}  transition-all duration-300`}>
            <div className="flex flex-col">
                <div className='flex justify-between items-center'>
                    <div className="text-prim-btn text-2xl leading-7">
                        {m.title}
                    </div>
                    <button className={`${m.id != '1' && 'hidden'} h-5 w-5 transition-all duration-300`} onClick={() => { setToggle(prev => !prev); console.log(m.id) }}>
                        {toggle ? (
                            <RemoveIcon className='h-full! w-full! text-black!' />
                        ) : (
                            <AddIcon className='h-full! w-full! text-black!' />
                        )}
                    </button>

                </div>

                <div className={`${m.id != '1' && 'hidden'} ${toggle ? 'grid-rows-[1fr] opacity:100' : 'grid-rows-[0fr] opacity:0'} grid gap-2 transition-all duration-300 overflow-hidden w-full`}>
                    <DropDown l={m.list} />
                </div>
            </div>
        </Link>
    )
}
function Header() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [desktopMenuToggle, setDesktopMenuToggle] = useState(false);
    const menu: m[] = [
        {
            id: '1', title: "Company", href: '/', list: [
                { id: "1", label: "Home A" },
                { id: "2", label: "Home B" },
                { id: "3", label: "Home C" },
                { id: "4", label: "About us" },
                { id: "5", label: "Contact A" },
                { id: "6", label: "Contact B" },
                { id: "7", label: "Contact C" },
            ]
        },
        { id: '2', title: "About Us", href: '/about' },
        { id: '3', title: "Gallery", href: '/gallery' },
    ];
    const dropdownMenu: m[] = [
        {
            id: '1', title: "pages", href: '/', list: [
                { id: "1", label: "Home A" },
                { id: "2", label: "Home B" },
                { id: "3", label: "Home C" },
                { id: "4", label: "Contact A" },
                { id: "5", label: "Contact B" },
                { id: "6", label: "Contact C" },
            ]
        },
        {
            id: '2', title: "other", href: '/', list: [
                { id: "1", label: "Blog A" },
                { id: "2", label: "Blog B" },
                { id: "3", label: "Blog C" },
                { id: "4", label: "FAQ" },
                { id: "5", label: "Legal" },
            ]
        },
    ];

    const handleExpand = (id: string) => {
        if (id === '1')
            setDesktopMenuToggle(true);
    }
    const handleCollapse = () => {
        setDesktopMenuToggle(false);
    }
    return (
        <>
            <div className="hidden lg:flex fixed top-0 left-0 w-full z-30 bg-white h-4"></div>
            {/* <header className={`fixed w-full mx-auto top-4 left-10% min-[426px]:top-5 min-[426px]:left-5 bg-white z-20 bg-hero-sec rounded-xl max-w-98 min-[426px]:max-w-157.5 md:max-w-182 lg:max-w-228 lg:top-4 lg:rounded-b-xl lg:rounded-t-0 lg:rounded-t-none h-fit shadow-2xl`}> */}
            <header className={`fixed w-[calc(100%-2rem)] top-4 left-1/2 -translate-x-1/2 bg-white z-20 bg-hero-sec rounded-xl max-w-98 min-[426px]:max-w-157.5 md:max-w-182 lg:max-w-228 lg:top-4 lg:rounded-b-xl lg:rounded-t-0 lg:rounded-t-none h-fit shadow-2xl`}>
                {/* mobile view */}
                <div className="relative flex flex-col lg:hidden">
                    <nav className="px-5 py-2 min-[426px]:px-6 min-[426px]:py-3 flex items-center min-[426px]:justify-between gap-5 w-full">
                        <div className="flex min-[426px]:hidden items-center justify-between w-full">
                            <button className="bg-gray-200 px-3 py-2 rounded-4xl mr-auto" onClick={() => setMenuToggle(prev => !prev)}>
                                <div className="w-4 h-4 flex justify-center items-center transition-all duration-300">{menuToggle ? (
                                    <CloseIcon />
                                ) : (
                                    <MenuIcon />
                                )}
                                </div>
                            </button>

                            <Link href='/' className="h-4">
                                <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69833e435f55c34294a79a9a_Caladan%E2%84%A2.svg" alt="Caladan" className="h-full w-full min-[426px]:min-h-6 min-[426px]:min-w-28" />
                            </Link>
                        </div>
                        <button className="hidden min-[426px]:flex bg-gray-200 px-3 py-2 rounded-4xl" onClick={() => setMenuToggle(prev => !prev)}>
                            <div className="w-4 h-4 flex justify-center items-center transition-all duration-300">{menuToggle ? (
                                <CloseIcon />
                            ) : (
                                <MenuIcon />
                            )}
                            </div>
                        </button>

                        <Link href='/' className="hidden min-[426px]:flex h-4">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69833e435f55c34294a79a9a_Caladan%E2%84%A2.svg" alt="Caladan" className="h-full w-full" />
                        </Link>



                        <div className="">
                            <Button bg="prim" />
                        </div>

                    </nav>

                    {/* nav list */}
                    <div className={`grid overflow-hidden ${menuToggle ? 'grid-rows-[1fr] opacity-100 text-dark-sec text-xs leading-3 font-medium px-5 py-6' : 'opacity-0 grid-rows-[0fr]'} duration-300 transition-all`}>
                        <div className="min-h-0 w-full">

                            <div className="flex flex-col">
                                {menu.map((m) => (
                                    <List key={m.id} m={m} />
                                ))}
                                <div className="mt-2">
                                    <Button label="Get Started" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="hidden lg:block absolute top-0 -left-3.75 w-4 h-4 bg-white [mask-image:radial-gradient(circle_at_bottom_right,transparent_16px,black_16px)] scale-x-[-1] z-30" />
                <div className="hidden lg:block absolute top-0 -right-3.75 w-4 h-4 bg-white [mask-image:radial-gradient(circle_at_bottom_left,transparent_16px,black_16px)] scale-x-[-1] z-30" />

                {/* desktop nav */}
                <nav className="">
                    <div className="hidden lg:flex items-center justify-between px-6 py-3">
                        <div className="flex items-center">
                            <div className="flex items-center gap-4">
                                {menu.map((l) => (
                                    <Link href='/' key={l.id} className="leading-7 text-sm font-medium cursor-pointer" onMouseOver={() => handleExpand(l.id)} >
                                        <div className={`flex items-center ${desktopMenuToggle && l.id !== '1' ? 'opacity-40' : 'ded'} `} >

                                            {l.title}
                                            {l.id === '1' && (
                                                <div className={`${desktopMenuToggle && 'rotate-180'} transition-transform duration-300`}>
                                                    <ArrowDropDownIcon />
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="h-6">
                            <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69833e435f55c34294a79a9a_Caladan%E2%84%A2.svg" alt="" className="h-full w-auto" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="whitespace-nowrap text-sm leading-6 font-medium underline underline-offset-4">
                                View Resorts
                            </div>

                            <Button label="Book Now" bg="prim" />
                        </div>
                    </div>
                    {/* dropdown */}
                    <div className={`hidden lg:grid min-h-0 w-full overflow-hidden ${desktopMenuToggle ? 'grid-rows-[1fr] opacity-100 ' : ' grid-rows-[0fr] opacity-0 pointer-events-none'} transition-all duration-300`} onMouseOver={() => handleExpand("1")} onMouseLeave={handleCollapse}>
                        <div className=" min-h-0 w-full">
                            <div className="p-6 pt-8 flex items-start gap-4 w-full">

                                <div className="left flex w-1/2 gap-8">
                                    {dropdownMenu.map((l) => (
                                        <div key={l.id} className="flex flex-col flex-1 gap-3">
                                            <div className="leading-3 text-[10px] font-medium text-prim-btn">
                                                {l.title.toUpperCase()}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {l.list?.map((li) => (
                                                    <div key={li.id} className="leading-6 text-base">{li.label}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative right rounded-xl w-full max-w-106 max-h-60 h-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1785970869989-91d5fcc43712?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover object-center" />
                                    <div className="absolute bottom-6 left-6">
                                        <LightButton label="More Templates" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


            </header>


            {menuToggle &&
                <div className="absolute inset-0 z-10 overlay w-screen h-screen blur-xs">
                </div>
            }
        </>

    )
}

export default Header
