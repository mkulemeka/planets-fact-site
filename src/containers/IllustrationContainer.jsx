import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext } from "react";

const IllustrationContainer = ({ planetImages, planetName, planetSizes }) => {
  const { activeButton, windowWidth } = useContext(PlanetContext);
  const { planet, internal, geology } = planetImages;

  // Function to return the image based on the active button
  const image = () => {
    if (activeButton === "Structure") return internal;
    return planet;
  };

  // Function to return the image width based on the window width
  const imageWidth = () => {
    if (windowWidth >= 768 && windowWidth < 1440) return planetSizes.tablet;
    if (windowWidth >= 1440) return planetSizes.desktop;
    return planetSizes.mobile;
  };

  // Styles for the before pseudo-element
  const beforeStyles = {
    backgroundImage: `url(${geology})`,
    content: "''",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    transform: "translate(-50%)",
    width: "110px",
    height: "150px",
  };

  // Styles for the image container
  const imageStyles = {
    backgroundImage: `url(${image()})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: imageWidth(),
    height: "100%",
  };

  return (
    <figure className="planet-section__image px-[1.5rem] relative h-[300px]">
      <motion.div id={planetName} style={imageStyles}></motion.div>
      {activeButton === "Surface" && <span style={beforeStyles}></span>}
    </figure>
  );
};

IllustrationContainer.propTypes = {
  planetImages: PropTypes.object.isRequired,
  planetName: PropTypes.string.isRequired,
  planetSizes: PropTypes.object.isRequired,
};

export default IllustrationContainer;
