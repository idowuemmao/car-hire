import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-6 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex items-center cursor-pointer">
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
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((link) => (
          <div
            key={link.id}
            className="flex flex-col gap-6 text-base min-w-[170px]"
          >
            <h3 className="font-bold ">{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.id} href={item.url} className="text-gray-500">
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center border-t border-gray-100 justify-between mt-10 sm:px-16 px-6 py-10">
        <p>@2023 CarHire. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
