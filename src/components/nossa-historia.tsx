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
    <div className="w-full max-w-5xl mx-auto px-4 pt-30 flex flex-col md:flex-row items-center justify-center gap-12 text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-6 uppercase">
          {nossaHistoriaTitle}
        </h2>
        <p className="text-lg md:text-xl font-semibold dark:text-neutral-200">
          {nossaHistoriaDescription}
        </p>
      </div>

      {nossaHistoriaImage && (
        <div className="flex justify-center md:justify-end flex-1">
          <Image
            src={urlFor(nossaHistoriaImage).url()}
            width={320}
            height={320}
            className="object-cover max-w-full h-auto rounded-full"
            alt={nossaHistoriaTitle ?? "Nossa História"}
          />
        </div>
      )}
    </div>
  );
};


