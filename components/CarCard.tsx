"use client";
import React, { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-xl font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-base font-semibold">$</span>
        {carRent}
        <span className="self-end text-base font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-2 object-contain">
        <Image
          src="/hero.png"
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative group flex w-full mt-2">
        <div className="flex  group-hover:invisible w-full justify-between text-gray-500 ">
          <div className="flex flex-col justify-center cursor-pointer items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-base">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center cursor-pointer items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-base">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center cursor-pointer items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-base">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            btnType="submit"
            containerStyles="w-full py-2 rounded-full bg-primary-blue"
            textStyles="text-white text-base font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
