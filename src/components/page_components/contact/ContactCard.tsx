'use client';
import TitlePill from "@/components/common/TitlePill"
import TextInput, { DropDown } from "../inquiry/TextInput"
import CheckBox from "../inquiry/CheckBox"
import { useCardAnimation } from "@/llib/useCardAnimation";

function ContactCard() {

    useCardAnimation('.form-card');
    return (
        <section className="pt-24 pb-6 px-4 md:pt-30 md:pb-8 md:px-8">
            <div className="relative p-5 md:p-6 rounded-lg overflow-hidden grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 form-card">
                <div className="absolute inset-0 h-full w-full -z-2">
                    <img src="https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69a71bba30f0d6079e4cbf30_Aerial%20View%20of%20a%20Tropical%20Beach.avif" alt="contact" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 w-full h-full bg-prim-btn/70 -z-1"></div>

                {/* info */}
                <div className="flex flex-col gap-14 text-white md:gap-20 lg:justify-between">
                    <div className="flex flex-col gap-5 md:gap-6 max-w-96">
                        <TitlePill label="react out to caladan" />
                        <div>
                            <h2 className="text-white text-[48px] leading-13 md:leading-17 md:text-[64px]">
                                Reservation & Inquires
                            </h2>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[60%_30%] md:gap-8">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>Email</div>
                            <p className="whitespace-nowrap">reservations@caladanresort.com</p>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 lg:max-w-42.5">
                            <div>Phone</div>
                            <p>+689 40 123 456</p>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div>Location</div>
                            <p>Avenue Bora Bora, 98729 <br />Punaauia, Tahiti, French Polynesia</p>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4 lg:max-w-42.5">
                            <div>Response Time</div>
                            <p>We reply within 24 hours, island time</p>
                        </div>

                    </div>
                </div>

                {/* form */}
                <form action="" className="p-6 bg-gray-100 rounded-lg flex flex-col gap-5 lg:w-full md:p-8">
                    <TextInput name="fullname" label="full name" required={true} placeholder="Your name" type="text" sty='w-full'/>
                    <TextInput name="email" label="email address" required={true} placeholder="xyz@example.com" type="email" sty='w-full'/>
                    <TextInput name="phone" label="phone number" required={false} placeholder="+689 40 123 456" type="tel" sty='w-full'/>
                    <DropDown values={['Event/Wedding', 'General Question', 'Press/Media', 'Others']} label="subject" required={true} sty="w-full"/>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="msg" className="text-[12px] leading-3 font-medium font-mono md:leading-4">MESSAGE*</label>
                        <textarea name="message" id="" rows={5} placeholder="Tell us about your stay or questions.." className="bg-gray-200 rounded-lg py-2 px-3">
                        </textarea>
                    </div>

                    <CheckBox />
                    <button type='submit' className='bg-prim-btn text-white whitespace-nowrap leading-5 text-[13px] font-medium  lg:text-sm opacity-100 rounded-full py-2.75 px-4'>Send Inquiry</button>


                </form>
            </div>
        </section>
    )
}

export default ContactCard
