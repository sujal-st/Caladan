import { notFound } from "next/navigation";
import { resorts } from '@/components/constants/data';
import TopSection from '@/components/page_components/resorts/resortDetail/TopSection';
import MoreAccomodation from "@/components/page_components/resorts/resortDetail/MoreAccomodation";

async function ResortDetailPage({params}:PageProps<'/resorts/[slug]'>) {
  const {slug}=await params;
  const resort= resorts.find((r)=>r.slug===slug);

  if(!resort)
    notFound();

  return (
    <>
      <TopSection resort={resort}/>
      <MoreAccomodation/>
    </>
  )
}

export default ResortDetailPage
