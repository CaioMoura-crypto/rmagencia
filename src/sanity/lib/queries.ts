import { defineQuery } from "next-sanity";

export const CONTENT_QUERY = defineQuery(`
*[_type == "content"]{
  heroTitle,
  heroDescription,
  heroWorks[]{
    "image": image.asset._ref,
    title
  },
  nossaHistoriaTitle,  
  nossaHistoriaDescription,
  "nossaHistoriaImage": nossaHistoriaImage.asset._ref,
  services[]{
    title,
    "image": image.asset._ref
  },
  contactTitle,
  "contactImage": contactImage.asset._ref
}
`);