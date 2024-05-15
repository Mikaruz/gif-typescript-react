import { useState } from "react";

type GifInputProps = {
  onNewCategory: (category: string) => void;
};

export const GifInput = ({ onNewCategory }: GifInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Gifs"
          value={inputValue}
          onChange={onInputChange}
        ></input>
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </form>
  );
};
