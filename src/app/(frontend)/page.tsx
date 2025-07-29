import { CONTENT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Hero } from "@/components/hero";
import { NossaHistoria } from "@/components/nossa-historia";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Partners } from "@/components/partners";

const options = { next: { revalidate: 0 } };

export default async function Page() {
  const content = await client.fetch(CONTENT_QUERY, {}, options);
  console.log("Content fetched:", content);

  if (!content || !content[0]) {
    return <div>No content found</div>;
  }

  return (
    <main className="w-full max-w-full lg:max-w-[1700px] mx-auto px-4 flex flex-col items-center gap-20">
      {content[0].heroWorks &&
        content[0].heroTitle &&
        content[0].heroDescription && (
          <section className="w-full max-w-full lg:max-w-[1600px] mx-auto px-4 text-center md:text-left">
            <Hero
              works={content[0].heroWorks}
              heroTitle={content[0].heroTitle}
              heroDescription={content[0].heroDescription}
            />
          </section>
        )}

      {content[0].nossaHistoriaTitle &&
        content[0].nossaHistoriaDescription &&
        content[0].nossaHistoriaImage && (
          <section className="w-full max-w-full lg:max-w-[1600px] mx-auto px-4 text-center md:text-left">
            <NossaHistoria
              nossaHistoriaTitle={content[0].nossaHistoriaTitle}
              nossaHistoriaDescription={content[0].nossaHistoriaDescription}
              nossaHistoriaImage={content[0].nossaHistoriaImage}
            />
          </section>
        )}

      {content[0].services && (
        <section className="w-full max-w-full lg:max-w-[1600px] mx-auto px-4 text-center md:text-left">
          <Services services={content[0].services} />
        </section>
      )}

      {content[0].contact && content[0].logoContact && (
        <section className="w-full max-w-full lg:max-w-[1600px] mx-auto px-4 text-center md:text-left">
          <Contact
            contact={content[0].contact}
            logoContact={content[0].logoContact}
          />
        </section>
      )}

      {content[0].partners && (
        <section className="w-full max-w-full lg:max-w-[1600px] mx-auto px-4 text-center md:text-left">
          <Partners partners={content[0].partners} />
        </section>
      )}
    </main>
  );
}
