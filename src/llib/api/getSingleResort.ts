import { resort } from '@/components/page_components/home/ReefSection';
import { sanityFetch } from '@/sanity/lib/live';

const RESORT_QUERY = `*[_type == "resort" && slug.current == $slug][0]{
  _id, title, slug, description, cat, size, beds, guests, img
}`

export default async function getResort(slug:string) {
    const {data:resort} = await sanityFetch({query:RESORT_QUERY, params:{slug: slug}});

    return resort as resort
}