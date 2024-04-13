import { Link, useLocation } from "react-router-dom";
import { linkVariant, navVariant } from "../animations/variants";
import { useContext, useEffect } from "react";

import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { images } from "../assets";
import { motion } from "framer-motion";

const PlanetLinks = ({ planets, isNavOpen, setIsNavOpen }) => {
  const { planetColors, windowWidth } = useContext(PlanetContext);
  const { chevron } = images;
  const { pathname } = useLocation();

  // keep the nav open on larger screens
  useEffect(() => {
    if (windowWidth > 768) setIsNavOpen(true);
  });

  // function to close the nav when link is clicked on mobile
  const handleLinkClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  // function to set the background color of the active link
  const pseudoBackground = (planet) => {
    if (pathname === "/" && planet === "Mercury")
      return planetColors[planet.toLowerCase()];
    if (pathname.slice(1) === planet.toLowerCase())
      return planetColors[planet.toLowerCase()];
  };

  const linkBeforeStyles = {
    content: "''",
    position: "absolute",
    top: "-32px",
    left: 0,
    width: "100%",
    height: "4px",
    transition: "background-color 0.5s",
  };

  return (
    <>
      {isNavOpen && (
        <motion.ul
          {...(windowWidth < 768 && { initial: "hidden" })}
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          variants={navVariant}
          className="flex flex-col md:flex-row md:justify-center md:gap-[2.0625rem] absolute md:static left-0 top-[4.25rem] uppercase w-full px-[1.5rem] pt-[1rem] md:pt-0 z-10 bg-darkBlue"
        >
          {planets.map((planet) => (
            <motion.li key={planet} variants={linkVariant}>
              <Link
                to={planet === "Mercury" ? "/" : `/${planet.toLowerCase()}`}
                className={`flex items-center pt-[1.25rem] pb-[1.25rem] tracking-widest font-medium md:border-0 md:relative ${
                  planet !== "Mercury" && "border-t-[1.5px] border-gray-700"
                }`}
                {...(windowWidth < 768 && { onClick: handleLinkClick })}
              >
                <div
                  className="h-[1.25rem] w-[1.25rem] rounded-[100%] mr-[1.5rem] md:hidden"
                  style={{
                    backgroundColor: planetColors[planet.toLowerCase()],
                  }}
                ></div>
                <div className="flex justify-between items-center w-full">
                  {planet}
                  <figure className="md:hidden">
                    <img src={chevron} alt="chevron" />
                  </figure>
                </div>
                <div
                  className="hidden lg:block"
                  style={{
                    ...linkBeforeStyles,
                    backgroundColor: pseudoBackground(planet),
                  }}
                ></div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

PlanetLinks.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default PlanetLinks;
