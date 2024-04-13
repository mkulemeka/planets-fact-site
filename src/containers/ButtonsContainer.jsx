import { Button } from "../components";
import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { useContext } from "react";

const ButtonsContainer = ({ planetName }) => {
  const { windowWidth, setActiveButton } =
    useContext(PlanetContext);

  // set the active button
  const handleClick = (e) => setActiveButton(e.target.id);

  const buttonsText = ["Overview", "Internal Structure", "Surface Geology"];
  const buttonsTextMobile = ["Overview", "Structure", "Surface"];
  return (
    <section className="planet-section__links flex justify-between items-center border-b-[1.5px]  border-gray-700 px-[1.5rem] text-sm font-medium md:flex-col md:justify-center md:gap-4 md:border-0">
      {windowWidth < 768
        ? buttonsTextMobile.map((text, i) => (
            <Button
              buttonID={buttonsTextMobile[i]}
              key={text}
              text={text}
              handleClick={handleClick}
              planetName={planetName}
            />
          ))
        : buttonsText.map((text, i) => (
            <Button
              buttonID={buttonsTextMobile[i]}
              key={text}
              text={text}
              handleClick={handleClick}
              planetName={planetName}
              number={i}
            />
          ))}
    </section>
  );
};

ButtonsContainer.propTypes = {
  planetName: PropTypes.string.isRequired,
};

export default ButtonsContainer;
