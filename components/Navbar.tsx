import React from "react";
import { CustomButton } from ".";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-20 ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link className="flex items-center" href="/">
          <Image
            src="/car.png"
            alt="car hire logo"
            width={50}
            height={20}
            className="object-contain"
          />
          <h1 className="font-extrabold text-2xl text-primary-blue">CarHire</h1>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue shadow-lg border-[1px] rounded-full bg-white min-w-[120px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
