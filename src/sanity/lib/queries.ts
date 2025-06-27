import { defineQuery } from "next-sanity";

export const CONTENT_QUERY = defineQuery(`
*[_type == "content"]{
  heroTitle,
  heroDescription,
  "heroWorks": heroWorks[]{
    "image": image.asset._ref,
    "title": coalesce(title, "")
  }
}
`);
