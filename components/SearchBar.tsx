"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";

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
          manufacturer={""}
          setManufacturer={function (manufacturer: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
