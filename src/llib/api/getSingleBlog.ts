import { blog } from "@/components/constants/types";
import { sanityFetch } from "@/sanity/lib/live";

const resort_query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
  title,
  "slug": slug.current,  
  subtitle,
  date,
  time,
  img,
  cat
}`

export default async function getBlog(slug:string) {
    const {data:blog} = await sanityFetch({query:resort_query,params:{slug:slug}});

    return blog as blog
}