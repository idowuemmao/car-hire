import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-6 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex items-center">
            <Image
              src="/car.png"
              alt="car hire logo"
              width={50}
              height={20}
              className="object-contain"
            />
            <h1 className="font-extrabold text-2xl text-primary-blue">
              CarHire
            </h1>
          </div>
          <p className="text-base text-gray-700">
            CarHire 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20"></div>
      </div>
    </footer>
  );
};

export default Footer;
