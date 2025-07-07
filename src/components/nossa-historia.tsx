interface NossaHistoriaProps {
  nossaHistoriaTitle: string | null;
  nossaHistoriaDescription: string | null;
}

export const NossaHistoria = ({ nossaHistoriaTitle, nossaHistoriaDescription }: NossaHistoriaProps) => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-bold dark:text-white">
        {nossaHistoriaTitle}
      </h2>
      <p> {nossaHistoriaDescription}</p>
    </div>

  );
};
