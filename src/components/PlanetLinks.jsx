import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { images } from "../assets";
import { useEffect } from "react";

const PlanetLinks = ({ planets, isNavOpen, setIsNavOpen }) => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsNavOpen(true);
    }
  });

  const { chevron } = images;

  return (
    <>
      {isNavOpen && (
        <ul
          className={`flex flex-col md:flex-row md:justify-center md:gap-[2.0625rem] absolute md:static left-0 top-[4.25rem] uppercase w-full px-[1.5rem] pt-[2.35rem] md:pt-0 z-10 transition-all ease-in-out delay-1000 bg-darkBlue ${
            isNavOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {planets.map((planet) => {
            let planetColor = "bg-".concat(planet.toLowerCase());
            console.log(planetColor);
            return (
              <li key={planet}>
                <Link
                  to={planet === "Mercury" ? "/" : `/${planet.toLowerCase()}`}
                  className={`flex items-center pt-[1.25rem] pb-[1.25rem] tracking-widest font-medium md:border-0 ${
                    planet !== "Mercury" && "border-t-[1.5px] border-gray-700"
                  }`}
                >
                  <div
                    className={`${planetColor} h-[1.25rem] w-[1.25rem] rounded-[100%] mr-[1.5rem] md:hidden`}
                  ></div>
                  <div className="flex justify-between items-center w-full">
                    {planet}
                    <figure className="md:hidden">
                      <img src={chevron} alt="chevron" />
                    </figure>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
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
