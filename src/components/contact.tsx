import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";


type Contact = {
  title: string | null;
  image: string | null;
};

interface ContactProps {
  contactTitle: string | null;
  contactImage: string | null;
}

export const Contact = ({
  contactTitle,
  contactImage,
}: ContactProps) => {
  return (
    <div className="flex flex-col size-full px-5">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 uppercase text-center">
        {contactTitle}
      </h2>
      {contactImage && (
        <Image
          src={urlFor(contactImage).url()}
          width={80}
          height={80}
          alt="Contact Image"
        />
      )}
    </div>
  );
}