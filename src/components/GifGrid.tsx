import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

type GifGridProps = {
  category: string;
};

export const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div>
        {gifs.map((gif: Gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
