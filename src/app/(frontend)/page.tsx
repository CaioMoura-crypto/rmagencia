import { CONTENT_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import { Hero } from "@/components/hero"
import { NossaHistoria } from "@/components/nossa-historia"

const options = { next: { revalidate: 0 } }

export default async function Page() {
  const content = await client.fetch(CONTENT_QUERY, {}, options)
  console.log("Content fetched:", content)

  if (!content || !content[0]) {
    return <div>No content found</div>
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 ">
      {content[0].heroWorks && content[0].heroTitle && content[0].heroDescription && (
        <Hero
          works={content[0].heroWorks}
          heroTitle={content[0].heroTitle}
          heroDescription={content[0].heroDescription}
        />
      )}
      {content[0].nossaHistoriaTitle && (
        <NossaHistoria nossaHistoriaTitle={content[0].nossaHistoriaTitle} />
      )}
    </main>
  )
}
