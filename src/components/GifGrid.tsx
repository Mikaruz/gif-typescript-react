import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import load from "../assets/load.gif";

type GifGridProps = {
  category: string;
};

export const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(category);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img className="loading" src={load} alt="aea" />
      </div>
    );
  }

  return (
    <>
      <h2>{category.toLocaleUpperCase()}</h2>
      <div className="gif-container">
        {gifs.map((gif: Gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
