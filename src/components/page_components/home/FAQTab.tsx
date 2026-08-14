import {useState} from 'react';
import { useGSAP, gsap } from '@/llib/gsap';
import { tabData } from '@/components/constants/data';
import AddIcon from '@mui/icons-material/Add';

interface FAQDropdownProps {
    li: {
        id: string;
        title: string;
        description: string
    }
}

export function FAQDropdown({ li }: FAQDropdownProps) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-gray-100 p-4 rounded-sm hover:bg-gray-200 transition-colors duration-300 cursor-pointer md:p-5 faq-grid' onClick={() => setToggle(prev => !prev)}>
            <div key={li.id} className=' flex justify-between gap-6 items-center '>
                <div className='leading-5 text-prim-btn text-base font-medium'>
                    {li.title}
                </div>
                <div className={`${toggle ? 'rotate-315' : ''} transition-transform duration-300`}>
                    <AddIcon />
                </div>
            </div>
            <div className={` grid overflow-hidden ${toggle ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} transition-all duration-300`}>
                <div className='min-h-0 '>
                    <div className='pt-5 leading-5 text-prim-btn/60 text-base font-normal md:leading-6 md:pt-6'>
                        {li.description}
                    </div>
                </div>
            </div>
        </div>
    )
}


function FAQTab() {
    const [tabSwitch, setTabSwitch] = useState('1');


    useGSAP(() => {
        gsap.from('.faq-grid', {
            opacity: 0,
            ease: 'power1.out',
            delay: 0.1
        })
    }, [tabSwitch])
    return (
        <div className='container min-[1200px]:max-w-250'>
            <div className='border border-gray-200 rounded-lg bg-gray-100 flex justify-center items-center w-fit mx-auto p-1 mb-6 md:w-auto md:max-w-122.5 md:mb-8'>
                {tabData.map((t) => (
                    <div key={t.id} className={`rounded-lg text-center px-5 py-2 leading-5 text-base cursor-pointer md:leading-6 md:px-6 md:flex-1 ${tabSwitch === t.id ? 'bg-prim-btn text-white' : 'text-prim-btn/50'}`} onClick={() => setTabSwitch(t.id)}>
                        {t.title}
                    </div>
                ))
                }
            </div>

            {tabData.map((t) => (
                tabSwitch === t.id
                &&
                <div key={t.id} className='flex flex-col justify-center gap-3 md:gap-4 w-full'>
                    {t.list.map((li) => (
                        <FAQDropdown key={li.id} li={li} />
                    ))}
                </div>
            ))}

        </div>
    )
}

export default FAQTab


