import { CONTENT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Hero } from "@/components/hero";
import { NossaHistoria } from "@/components/nossa-historia";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";

const options = { next: { revalidate: 0 } };

export default async function Page() {
  const content = await client.fetch(CONTENT_QUERY, {}, options);
  console.log("Content fetched:", content);

  if (!content || !content[0]) {
    return <div>No content found</div>;
  }

  return ( 
    <main className="container mx-auto flex flex-col">
      {content[0].heroWorks &&
        content[0].heroTitle &&
        content[0].heroDescription && (
          <Hero
            works={content[0].heroWorks}
            heroTitle={content[0].heroTitle}
            heroDescription={content[0].heroDescription}
          />
        )}
      {content[0].nossaHistoriaTitle &&
        content[0].nossaHistoriaDescription &&
        content[0].nossaHistoriaImage && (
          <NossaHistoria
            nossaHistoriaTitle={content[0].nossaHistoriaTitle}
            nossaHistoriaDescription={content[0].nossaHistoriaDescription}
            nossaHistoriaImage={content[0].nossaHistoriaImage}
          />
        )}

      {content[0].services && <Services services={content[0].services} />}

      {content[0].contact && 
      content[0].logoContact && (
          <Contact
            contact={content[0].contact}
            logoContact={content[0].logoContact}
        />
      )}
    </main>
  );
};