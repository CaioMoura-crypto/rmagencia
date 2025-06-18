import { Hero } from "@/components/hero"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { type SanityDocument } from "next-sanity"
import { client } from "@/sanity/client"
import {CONTENT_QUERY} from "@/sanity/lib/queries";

const options = { next: { revalidate: 0 } }

export default async function Home() {
  try {
    const content = await client.fetch<SanityDocument>(CONTENT_QUERY, {}, options)

    console.log("Content fetched:", JSON.stringify(content, null, 2))

    const heroTitle = content?.heroTitle
    const heroDescription = content?.heroDescription
    const heroProducts = content?.heroProducts

    if (!heroTitle || !heroDescription || !heroProducts) {
      console.log("Missing required content fields:", {
        hasTitle: !!heroTitle,
        hasDescription: !!heroDescription,
        hasProducts: !!heroProducts,
      })
      return null
    }

    return (
      <div>
        <ModeToggle />
        <Hero
          title={heroTitle}
          description={heroDescription}
          products={heroProducts}
        />
      </div>
    )
  } catch (error) {
    console.error("Error fetching Sanity content:", error)
  }
}
