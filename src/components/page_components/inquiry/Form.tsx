'use client';
import TitlePill from '@/components/common/TitlePill'
import TextInput, { DateField, DropDown } from './TextInput'
import CheckBox from './CheckBox'
import { useRef } from 'react';
import { useCardAnimation } from '@/llib/useCardAnimation';

function Form() {
    const sectionRef = useRef<HTMLElement|null>(null);

    useCardAnimation('.container');
    return (
        <section className='pt-24 pb-16 px-4 md:pt-40 md:pb-30 md:px-8' ref={sectionRef}>

            <div className='container mx-auto'>
                {/* title */}
                <div className='flex flex-col items-center gap-6 mb-12'>
                    <div className='flex flex-col items-center gap-5'>
                        <TitlePill label='your paradise awaits' />

                        <div>
                            <h2 className='text-prim-btn/60 leading-13 text-[48px] whitespace-nowrap md:leading-17 md:text-[64px]'>
                                Book Caladan <span className='text-prim-btn'>Now</span>
                            </h2>
                        </div>
                    </div>

                    <div>
                        <p className='text-prim-btn/60 md:text-[20px] md:leading-7'>
                            Secure your slice of French Polynesia heaven.
                        </p>
                    </div>
                </div>


                <form action="" className='bg-gray-100 rounded-lg p-6 flex flex-col gap-5 md:p-8 max-w-199 mx-auto md:gap-6'>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-4'>
                        <TextInput type='text' label='Full name' placeholder='Your Name' name='fullname' required={true} />
                        <TextInput type='email' label='email address' placeholder='xyz@example.com' name='email' required={true} />
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-4'>
                        <TextInput type='tel' label='phone number' placeholder='+ 977 1234567890' required={false} name='phone' />
                        <DropDown values={['a','b','c']} label='room type' required={true}/>
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-4'>
                        <DropDown values={[1,2,3]} label='adults' required={true}/>
                        <DropDown values={[1,2,3]} label='children' required={true}/>
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-4'>
                        <DateField label='check-in date' name='check-in' required={true}/>
                        <DateField label='check-out date' name='check-out' required={true}/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="req" className='text-[12px] leading-3 font-medium font-mono md:leading-4'>SPECIAL REQUESTS</label>
                        <textarea name="req" rows={6} id="" placeholder='Anniversaries, dietary needs, mobility access, late check-in...' className='bg-gray-200 py-2 px-3 text-base leading-5 rounded-xl text-prim-btn/60 appearance-none md:leading-6 focus:bg-white focus:outline-none focus:border focus:border-prim-btn/40'>
                        </textarea>
                    </div>

                    <CheckBox />

                    <button type='submit' className='bg-prim-btn text-white whitespace-nowrap leading-5 text-[13px] font-medium  lg:text-sm opacity-100 rounded-full py-2.75 px-4'>Send Inquiry</button>
                </form>
            </div>

        </section>
    )
}

export default Form
