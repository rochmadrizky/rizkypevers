import Link from "next/link";
import React from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuNavbar = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };
  return (
    <>
      <ul className="flex items-center flex-col md:flex-row md:gap-[18px]">
        <li className="mb-4 md:mb-0 text-lg">
          <Link href="#" onClick={mengaturMenuKlik}>
            BLOGS
          </Link>
        </li>
        <li className="mb-4 md:mb-0 hidden md:block">
          <Link href="/" onClick={mengaturMenuKlik} className="text-4xl">
            Rizky Putra
          </Link>
        </li>
        <li className="mb-4 md:mb-0 text-lg">
          <Link href="#" onClick={mengaturMenuKlik}>
            ABOUTS
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuNavbar;
