import { Illustration } from "../components";
import { PlanetContext } from "../context/PlanetProvider";
import PropTypes from "prop-types";
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
    transition: "background-image 0.7s",
  };

  return (
    <Illustration
      beforeStyles={beforeStyles}
      imageStyles={imageStyles}
      activeButton={activeButton}
      planetName={planetName}
    />
  );
};

IllustrationContainer.propTypes = {
  planetImages: PropTypes.object.isRequired,
  planetName: PropTypes.string.isRequired,
  planetSizes: PropTypes.object.isRequired,
};

export default IllustrationContainer;
