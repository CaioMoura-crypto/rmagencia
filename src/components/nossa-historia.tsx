interface NossaHistoriaProps {
  nossaHistoriaTitle: string | null;
}

export const NossaHistoria = ({ nossaHistoriaTitle }: NossaHistoriaProps) => {
  return (
    <h2 className="text-xl md:text-3xl font-bold dark:text-white">
      {nossaHistoriaTitle}
    </h2>
  );
};
