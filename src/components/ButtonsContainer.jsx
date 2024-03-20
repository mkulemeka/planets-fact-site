import { useContext, useState } from "react";

import { Button } from "../components";
import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";

const ButtonsContainer = ({ planetName }) => {
  const { windowWidth } = useContext(PlanetContext);
  const [activeButton, setActiveButton] = useState("Overview");

  const handleClick = (e) => setActiveButton(e.target.textContent);

  const buttonsText = ["Overview", "Internal Structure", "Surface Geology"];
  const buttonsTextMobile = ["Overview", "Structure", "Surface"];
  return (
    <section className="planet-section__links flex justify-between items-center border-b-[1.5px]  border-gray-700 px-[1.5rem] text-sm font-medium">
      {windowWidth < 768
        ? buttonsTextMobile.map((text) => (
            <Button
              key={text}
              text={text}
              activeButton={activeButton}
              handleClick={handleClick}
              planetName={planetName}
            />
          ))
        : buttonsText.map((text) => <Button key={text} text={text} />)}
    </section>
  );
};

ButtonsContainer.propTypes = {
  planetName: PropTypes.string.isRequired,
};

export default ButtonsContainer;
