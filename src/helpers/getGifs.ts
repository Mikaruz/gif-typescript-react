export const getGifs = async (category: string) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=Mew7NdnfnP1wIFNLlzBGjCvwGP80cIOu&q=${category}&limit=100`;

  const response = await fetch(apiUrl);
  const { data } = await response.json();

  const gifs = data.map((gif: any) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
