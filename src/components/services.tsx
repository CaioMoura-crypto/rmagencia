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
    <div className="flex flex-col size-full px-5">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 uppercase text-center">
        Nossos Serviços
      </h2>
      {services &&
        services.map((service, index) => (
          <div className="flex items-center justify-between" key={index}>
            <p className={"font-bold"}>{service.title}</p>
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
