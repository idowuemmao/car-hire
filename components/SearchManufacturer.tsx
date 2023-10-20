"use client";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  //to filter the manufacturer based on our query, we first check if we have a query, if not return all the manufacturers else if query exist return the manufacturer.filter
  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter(
          (
            item //this will convert the searched word to lowercase and replace all the empty spaces with an empty string and check if the search query include the query we have
          ) =>
            item
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-4">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {/* within the combobox.options we can first show an empty option */}
              {filterManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filterManufacturer.map((item) => (
                  <Combobox.Option
                    value={item}
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary-blue text-white" : `text-gray-900`
                      }`
                    }
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
