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
      <ul className="flex items-center flex-col md:flex-row gap-4">
        <li className="mb-4 md:mb-0 text-lg">
          <Link href="#" onClick={mengaturMenuKlik}>
            BLOGS
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
