import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";

type Service = {
  title: string | null;
  image: string | null;
};

interface ServicesProps {
  services: Service[] | null;
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <div className="flex flex-col size-full px-5 mt-60">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-15 uppercase text-center">
        Nossos Serviços 
      </h2>
      {services &&
        services.map((service, index) => (
          <div className="flex items-center mb-6 text-xl" key={index}>
          <p className="font-bold whitespace-nowrap dark:text-white">{service.title}</p>
          <div className="flex-1 h-px bg-gray-400 mx-4"></div>
          <Image
            src={urlFor(service.image!).url()}
            width={80}
            height={80}
            className="rounded-full"
            alt="foto do serviço"
          />
          </div>
        ))}
    </div>
  );
};
