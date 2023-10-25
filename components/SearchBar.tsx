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

  const handleSearch = () => {
    console.log("grace");
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={() => {
            console.log(SearchManufacturer);
          }}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
