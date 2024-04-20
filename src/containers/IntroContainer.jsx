import { Intro } from "../components";
import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { images } from "../assets";
import { useContext } from "react";

const IntroContainer = ({ planetData }) => {
  const { activeButton } = useContext(PlanetContext);
  const { overview, structure, geology } = planetData;
  const { source } = images;

  // Function to return the source link based on the active button
  const sourceLink = () => {
    if (activeButton === "Overview") return overview.source;
    if (activeButton === "Structure") return structure.source;
    if (activeButton === "Surface") return geology.source;
  };

  // Function to return the content based on the active button
  const content = () => {
    if (activeButton === "Overview") return overview.content;
    if (activeButton === "Structure") return structure.content;
    if (activeButton === "Surface") return geology.content;
  };

  return (
    <Intro
      activeButton={activeButton}
      content={content}
      planetName={planetData.name}
      source={source}
      sourceLink={sourceLink}
    />
  );
};

IntroContainer.propTypes = {
  planetData: PropTypes.object.isRequired,
};

export default IntroContainer;
