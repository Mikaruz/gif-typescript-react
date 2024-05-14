type GifItemProps = {
  title: string;
  url: string;
};

export const GifItem = ({ title, url }: GifItemProps) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};
