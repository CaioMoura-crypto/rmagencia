import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

type Partner = {
  partnersImage: string | null;
};

interface PartnersProps {
  partners: Partner[] | null;
}

export const Partners = ({ partners }: PartnersProps) => {
  return (
    <div className="flex flex-col size-full px-5 pt-20 pb-28 mt-24">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-12 uppercase text-center">
        Parceiros
      </h2>

      <div className="flex flex-wrap gap-10 justify-center">
        {partners?.map((partner, index) => (
          <div className="flex flex-col items-center" key={index}>
            {partner.partnersImage && (
              <Image
                src={urlFor(partner.partnersImage).url()}
                width={360}
                height={200}
                alt={`Parceiro ${index + 1}`}
                className="object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
