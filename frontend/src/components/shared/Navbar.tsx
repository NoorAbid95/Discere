import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <ul className="flex justify-end items-center space-x-6 w-full pr-6 mt-6">
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
    </ul>
  );
};

export default Navbar;
