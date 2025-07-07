import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

type Service = {
  title: string | null
  image: string | null
}

interface ServicesProps {
  services: Service[] | null
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <div>
    {services && (
        <Image
              src={urlFor(services).url()}
              fill={true}
              className="object-cover object-left-top absolute h-full w-full inset-0"
              alt="foto do serviço"
            />

    )}
    </div>

  );
};
