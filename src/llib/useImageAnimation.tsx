import {gsap,useGSAP,ScrollTrigger} from '@/llib/gsap';

export function useImageAnimation(selector){
    useGSAP(()=>{

        const image=gsap.utils.toArray<HTMLImageElement>(selector);


        image.forEach((i)=>{
            gsap.set(i,{scale:1.3});
            gsap.to(i,{
                yPercent:15,
                scrollTrigger:{
                    trigger: '.container',
                    start: 'top center',
                    scrub:true
                }
            })
        })
    })
    
}