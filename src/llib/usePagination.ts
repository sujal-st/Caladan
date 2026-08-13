// 'use client';
// import { useState } from "react";

// export function usePagination(slidesPerPage:number, array:review[]){
//     const totalPages=Math.ceil(array.length/slidesPerPage);

//     const [currentPage, setCurrentPage]= useState(1);


//     const end= currentPage*slidesPerPage;
//     const start= end - slidesPerPage;

//     const slides=array.slice(start,end);

//     const handlePageChange=(page:number)=>{
//         if(page<1||page>totalPages) return;
//         setCurrentPage(page);
//     }

//     return {slides}

// }