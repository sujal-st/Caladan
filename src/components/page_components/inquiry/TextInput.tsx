import React from 'react'

interface TextInputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    sty?: string
}

function TextInput({ label, type, name, placeholder, required,sty="md:w-1/2" }: TextInputProps) {
    return (
        <div className={`flex flex-col gap-2 w-full ${sty}`}>
            <label htmlFor={label} className='text-[12px] leading-3 font-medium font-mono md:leading-4'>{label.toUpperCase()}{required && '*'}</label>
            <input type={type} name={name} id="" placeholder={placeholder} className='bg-gray-200 py-2 px-3 text-base leading-5 rounded-xl text-prim-btn/60 md:leading-6 md:px-4 md:py-3 focus:bg-white focus:outline-none focus:border focus:border-prim-btn/40 ' />
        </div>
    )
}

export default TextInput


interface DropDownProps {
    values: string[]|number[];
    label: string;
    required: boolean;
    sty?: string

}
export function DropDown({label, values,required,sty="md:w-1/2"}:DropDownProps) {
    return (
        <div className={`flex flex-col gap-2 w-full ${sty}`}>
            <label htmlFor={label} className='text-[12px] leading-3 font-medium font-mono md:leading-4'>{label.toUpperCase()}{required && '*'}</label>
            <select className='bg-gray-200 py-2 px-3 text-base leading-5 rounded-xl text-prim-btn/60 appearance-none md:leading-6 md:px-4 md:py-3 focus:bg-white focus:outline-none focus:border focus:border-prim-btn/40'>
                {/* <option disabled defaultValue='2'></option> */}
                {values.map((v)=>(
                    <option key={v} value={v}>{v}</option>
                ))}
            </select>
        </div>
    )
}

interface DateFieldProps{
    label:string;
    name:string;
    required: boolean
}
export function DateField({label, name,required }:DateFieldProps){
    return(
        <div className='flex flex-col gap-2 w-full md:w-1/2'>
            <label htmlFor={label} className='text-[12px] leading-3 font-medium font-mono md:leading-4'>{label.toUpperCase()}{required && '*'}</label>
            <input type="date" name={name} id="" className='bg-gray-200 py-2 px-3 text-base leading-5 rounded-xl text-prim-btn/60 appearance-none md:leading-6 md:px-4 md:py-3 focus:bg-white focus:outline-none focus:border focus:border-prim-btn/40'/>
        </div>
    )
}