import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { images } from "../assets";

const PlanetLinks = ({ planets, isNavOpen }) => {
  const { chevron } = images;

  return (
    <>
      {isNavOpen && (
        <ul
          className={`flex flex-col absolute left-0 top-[7.0625rem] uppercase w-full px-[1.5rem] z-10 transition-all ease-in-out delay-1000 ${
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
                  className={`flex items-center pt-[1.25rem] pb-[1.25rem] tracking-widest font-medium ${
                    planet !== "Mercury" && "border-t-[1.5px] border-gray-700"
                  }`}
                >
                  <div
                    className={`${planetColor} h-[1.25rem] w-[1.25rem] rounded-[100%] mr-[1.5rem]`}
                  ></div>
                  <div className="flex justify-between items-center w-full">
                    {planet}
                    <figure>
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
};

export default PlanetLinks;
