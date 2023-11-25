import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" list-none p-7 bg-[#FFDE59] md:hidden">
        <li className="flex items-center space-x-5">
          <ul>
            <AiOutlineBars size={30} onClick={() => setOpen(!open)} />
          </ul>
        </li>
      </nav>
      {open && (
        <li className="flex-row text-start px-5 p-2 mb-3 space-y-3 font-semibold list-none bg-[#FFDE59] text-black">
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Shop</ul>
          <ul>Services</ul>
          <ul>Blogs</ul>
        </li>
      )}
    </>
  );
}

export default MobileNav;
