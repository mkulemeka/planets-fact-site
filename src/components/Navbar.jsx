import { PlanetLinks } from "../components";
import PropTypes from "prop-types";
import { images } from "../assets";
import { useState } from "react";

const Navbar = ({ planets }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { hamburger } = images;

  // click function to open and close the nav
  const hamburgerClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className="nav flex justify-between relative w-full py-[1rem] px-[1.5rem] h-[4.25rem] border-b-[1.5px] border-gray-700">
      <div className="flex justify-between items-center w-full">
        <div className="font-leagueSpartan font-medium text-logo tracking-tighter flex items-center h-full">
          <p className="">THE PLANETS</p>
        </div>
        <figure role="button" aria-label="menu" onClick={hamburgerClick}>
          <img src={hamburger} alt="hamburger" />
        </figure>
      </div>
      <PlanetLinks planets={planets} isNavOpen={isNavOpen} />
    </nav>
  );
};

Navbar.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
