import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { useContext } from "react";

const Button = ({ text, handleClick, planetName, buttonID, number }) => {
  const { planetColors, activeButton, windowWidth } = useContext(PlanetContext);

  const borderStyle =
    activeButton === buttonID
      ? "border-opacity-100 font-bold"
      : "border-transparent border-opacity-0";

  // set the background color for the active button on desktop
  const background = () => {
    if (activeButton === buttonID && windowWidth > 768)
      return planetColors[planetName.toLowerCase()];
  };

  // set the border color for the active button on mobile
  const borderColor = () => {
    if (activeButton === buttonID && windowWidth < 768)
      return planetColors[planetName.toLowerCase()];
  };

  return (
    <button
      id={buttonID}
      className={`uppercase py-[1.25rem] transition-all duration-500 ${borderStyle} border-b-4 outline-transparent md:border md:border-lightGrey md:w-full md:flex md:gap-4 md:px-4 tracking-[1.5px] md:tracking-[1.5px] font-semibold md:hover:bg-slate-800`}
      onClick={handleClick}
      style={{
        background: background(),
        borderColor: borderColor(),
      }}
    >
      {windowWidth > 768 ? (
        <span className=" text-gray-400">{`0${number + 1}`}</span>
      ) : null}
      {windowWidth > 768 ? `${text}` : text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  planetName: PropTypes.string,
  buttonID: PropTypes.string,
  number: PropTypes.number,
};

export default Button;
