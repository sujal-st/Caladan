'use client';
import {useState} from 'react'
import { tabData } from "@/components/constants/data";
import { FAQDropdown } from '../../home/FAQSection';

function FAQ() {
    const [tabSwitch, setTabSwitch] = useState('1');
    return (
        <div className="flex flex-col gap-3">
            <div>FAQs</div>

            <div>
                {tabData.map((t) => (
                    tabSwitch === t.id
                    &&
                    <div key={t.id} className='flex flex-col gap-3 md:gap-4'>
                        {t.list.map((li) => (

                            <FAQDropdown key={li.id} li={li} />
                        )).slice(0,3)}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ
