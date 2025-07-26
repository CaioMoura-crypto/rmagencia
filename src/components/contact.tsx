import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";


type Contact = {
  contactTitle: string | null;
  image: string | null;
};
type ContactProps = {
  contact: Contact[];
  logoContact: string | null;
};

export const Contact = ({ contact , logoContact}: ContactProps) => {
  return (
    <div className ="flex flex-col size-full px-5 pt-20 pb-30">
      <Image
        src={urlFor(logoContact!).url()}
        width={1000}
        height={200}
        className="mx-auto mb-30"
        alt="logo de contato"
      />
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-10 uppercase">
      </h2>
      {contact && contact.map((contact, index) => (
        <div className="flex items-center justify-between " key={index}>
            <Image
              src={urlFor(contact.image!).url()}
              width={80}
              height={80}
              className=""
              alt="foto do serviço"
            />
            <p className={"font-bold"}>{contact.contactTitle}</p>
          </div>

      ))}
    </div>
  );
}