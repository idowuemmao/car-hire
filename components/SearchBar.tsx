"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      className="object-contain"
      width={40}
      height={40}
    />
  </button>
);
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = () => {
    console.log("grace");
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative gap-1 max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative border-2">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full border-2 flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model"
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-12 pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
