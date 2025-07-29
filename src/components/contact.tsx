import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import Link from "next/link";

type Contact = {
  contactTitle: string | null;
  image: string | null;
  url?: string | null;
};

type ContactProps = {
  contact: Contact[];
  logoContact: string | null;
};

export const Contact = ({ contact, logoContact }: ContactProps) => {
  const updatedContacts = contact.map((item, index) => {
    if (index === 0) {
      return { ...item, url: "https://wa.me/5571992948977" };
    }
    if (index === 1) {
      return {
        ...item,
        url: "https://www.instagram.com/rodrigomoreiramkt?igsh=ZnhnYnIwcmIxdGxk",
      };
    }
    return item;
  });

  return (
    <div className="flex flex-col size-full px-5 pt-20 pb-10 mt-24">
      {logoContact && (
        <Image
          src={urlFor(logoContact).url()}
          width={1000}
          height={200}
          className="mx-auto mb-10"
          alt="logo de contato"
        />
      )}

      <div className="flex flex-wrap gap-10 justify-center font-bold text-base md:text-2xl">
        {updatedContacts.map((contactItem, index) => (
          <div className="flex items-center space-x-4" key={index}>
            {contactItem.image && (
              <Image
                src={urlFor(contactItem.image).url()}
                width={60}
                height={60}
                className="rounded"
                alt="ícone de contato"
              />
            )}

            {contactItem.url ? (
              <Link
                href={contactItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white hover:underline"
              >
                {contactItem.contactTitle}
              </Link>
            ) : (
              <p className="dark:text-white">{contactItem.contactTitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

