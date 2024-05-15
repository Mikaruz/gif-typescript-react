import { useState } from "react";
import { GifInput } from "./components/GifInput";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [category, setCategory] = useState<string>("trending");

  const onAddCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <>
      <h1>GIFs</h1>
      <GifInput onNewCategory={onAddCategory} />
      <GifGrid key={category} category={category} />
    </>
  );
}

export default App;
