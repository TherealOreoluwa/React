import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/rooms">Our Rooms</Link>
        </li>

        <li>
          <Link to="/Nopage">NoPage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;