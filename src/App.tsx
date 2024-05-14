import { useState } from "react";
import { GifInput } from "./components/GifInput";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <GifInput onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
