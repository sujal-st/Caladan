'use client';

import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';

function CheckBox() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='relative flex items-start gap-4' onClick={()=>setToggle(prev=>!prev)}>
            <div className={`absolute bg-gray-200 rounded-full w-6 h-6 mr-2 flex items-center justify-center ${toggle&&'bg-white border border-prim-btn'}`}>
                <DoneIcon className={`w-3! ${toggle?'flex!':'hidden!'}`}/>
            </div>
            <input type="checkbox" name="" id="" className='-z-1' onChange={()=> setToggle(prev=>!prev)}/>
            <label htmlFor="checkbox" className=''>I understand my tropical paradise adventure is safe with Caladan</label>
        </div>
    )
}

export default CheckBox
