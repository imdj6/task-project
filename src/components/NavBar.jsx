import React from "react";
import Logo from "../Assets/Logo.png"
function NavBar() {
  return (
    <nav className="hidden md:flex md:items-center md:list-none md:justify-around md:p-7">
      <li>
        <ul>
        <img alt="logo" src={Logo} className="h-20 w-20 object-contain"/>
        </ul>
      </li>
      <li className="flex space-x-10 font-bold">
        <ul>Home</ul>
        <ul>About Us</ul>
        <ul>Shop</ul>
        <ul>Services</ul>
        <ul>Blogs</ul>
      </li>
    </nav>
  );
}

export default NavBar;
