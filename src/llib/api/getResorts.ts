import { client } from "@/sanity/lib/client";
import type { resort } from "@/components/page_components/home/ReefSection";
import { sanityFetch } from "@/sanity/lib/live";

const resort_query = `*[_type == "resort"]{
    _id,
  title,
  "slug": slug.current,
  description,
  cat,
  size,
  beds,
  guests,
  img
}`

export default async function getResorts() {
    const {data:resorts} = await sanityFetch({query:resort_query});

    return resorts
}