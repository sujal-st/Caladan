import { notFound } from "next/navigation";
import getResort from "@/llib/api/getSingleResort";
import TopSection from '@/components/page_components/resorts/resortDetail/TopSection';
import MoreAccomodation from "@/components/page_components/resorts/resortDetail/MoreAccomodation";
import { resort } from "@/components/page_components/home/ReefSection";

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
