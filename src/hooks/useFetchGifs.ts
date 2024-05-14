import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
