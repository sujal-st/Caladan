import { gsap, useGSAP,ScrollTrigger} from '@/llib/gsap';
import { RefObject } from 'react';


export function useTitleAnimation(selector:RefObject<HTMLDivElement|null>,trigger:string,scope?:RefObject<HTMLElement|null>){

    useGSAP(()=>{
        if(selector===null) return
        if(trigger===null) return
        gsap.from(selector.current,{
            filter: 'blur(10px)',
            opacity:0,
            ease: 'power1.out',
            duration:0.8,
            scrollTrigger:{
                trigger:selector.current,
                start: 'top 80%',
            }
        })
        ScrollTrigger.refresh();
    },{scope:scope})

}