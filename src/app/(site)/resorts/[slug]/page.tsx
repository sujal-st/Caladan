import { notFound } from "next/navigation";
import getResort from "@/llib/api/getSingleResort";
import TopSection from '@/components/page_components/resorts/resortDetail/TopSection';
import MoreAccomodation from "@/components/page_components/resorts/resortDetail/MoreAccomodation";
import { resort } from "@/components/page_components/home/ReefSection";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams(){
  const slugs= await client.fetch(`*[_type == 'resort']{"slug": slug.current}`)
  return slugs.map((s:any)=>({slug:s.slug}))
}

async function ResortDetailPage({params}:PageProps<'/resorts/[slug]'>) {
  const {slug}=await params;
  const resort:resort = await getResort(slug);

  return (
    <>
      <TopSection resort={resort}/>
      <MoreAccomodation/>
    </>
  )
}

export default ResortDetailPage
