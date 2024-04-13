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
    <nav className="nav flex md:flex-col lg:flex-row justify-between relative w-full py-[1rem] px-[1.5rem] h-[4.25rem] md:h-auto md:pt-8 md:gap-4 border-b-[1.5px] border-gray-700">
      <div className="flex justify-between md:justify-center lg:justify-start items-center w-full lg:px-[1.5rem]">
        <div className="font-leagueSpartan font-medium text-logo tracking-tighter flex items-center h-full">
          <span className=" md:text-stats">THE PLANETS</span>
        </div>
        <button
          className="md:hidden"
          aria-label="menu"
          onClick={hamburgerClick}
        >
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
      <PlanetLinks
        planets={planets}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </nav>
  );
};

Navbar.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
