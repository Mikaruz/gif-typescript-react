import { useState } from "react";
import { GifInput } from "./components/GifInput";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [category, setCategory] = useState<string>("");

  const onAddCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <GifInput onNewCategory={onAddCategory} />

      {category && <GifGrid category={category} />}
    </>
  );
}

export default App;
