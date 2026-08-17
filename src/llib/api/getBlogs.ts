import { blog } from "@/components/constants/types";
import { sanityFetch } from "@/sanity/lib/live";

const resort_query = `*[_type == "blog"]|order(date desc){
    _id,
  title,
  "slug": slug.current,  
  subtitle,
  date,
  time,
  img,
  cat
}`

export default async function getBlogs() {
    const {data:blogs} = await sanityFetch({query:resort_query});

    return blogs as blog[]
}