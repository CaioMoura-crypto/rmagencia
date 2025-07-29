import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

interface NossaHistoriaProps {
  nossaHistoriaTitle: string | null;
  nossaHistoriaDescription: string | null;
  nossaHistoriaImage: string | null;
}

export const NossaHistoria = ({
  nossaHistoriaTitle,
  nossaHistoriaDescription,
  nossaHistoriaImage,
}: NossaHistoriaProps) => {
  return (
    <div
      className="w-full flex md:flex-row flex-col items-center justify-center gap-10 text-center -mt-[90vh]"
    >
      <div className={"flex-1/2"}>
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 uppercase">
          {nossaHistoriaTitle}
        </h2>
        <p className="text-pretty text-2xl px-5 font-semibold">{nossaHistoriaDescription}</p>
      </div>
      <div className="flex-1/2 w-full h-full">
        {nossaHistoriaImage && (
          <Image
            src={urlFor(nossaHistoriaImage).url()}
            className="object-contain mx-auto rounded-full"
            width={400}
            height={400}
            priority
            alt="Nossa História"
          />
        )}
      </div>
    </div>
  );
};


