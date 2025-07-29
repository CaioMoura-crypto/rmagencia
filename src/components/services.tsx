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
    <div className="flex flex-col px-4 mt-40 max-w-screen-lg mx-auto w-full">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 uppercase text-center">
        Nossos Serviços
      </h2>

      {services?.map((service, index) => (
        <div
          key={index}
          className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6 text-xl w-full"
        >
          <p className="font-bold dark:text-white break-words md:whitespace-nowrap w-full md:w-auto">
            {service.title}
          </p>

          <div className="flex-1 h-px bg-gray-400 hidden md:block"></div>

          <div className="flex w-full md:w-auto justify-center md:justify-start">
            <Image
              src={urlFor(service.image!).url()}
              width={64}
              height={64}
              className="rounded-full object-cover"
              alt="foto do serviço"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
