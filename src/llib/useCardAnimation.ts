import {gsap,useGSAP} from '@/llib/gsap';


export function useCardAnimation(cardRef:string){
    useGSAP(()=>{
        gsap.from(cardRef,{
            filter: 'blur(10px)',
            opacity:0,
            ease: 'power1.out',
            duration:0.8
        })
    },)
}