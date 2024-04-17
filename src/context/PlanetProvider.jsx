import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

const PlanetContext = createContext();

// Planet colors
const planetColors = {
  mercury: "hsl(194, 48%, 49%)",
  venus: "hsl(33, 82%, 61%)",
  earth: "hsl(263, 67%, 51%)",
  mars: "hsl(10, 63%, 51%)",
  jupiter: "hsl(2, 68%, 53%)",
  saturn: "hsl(17, 73%, 46%)",
  uranus: "hsl(169, 73%, 44%)",
  neptune: "hsl(222, 87%, 56%)",
};

const PlanetProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);
  const [activeButton, setActiveButton] = useState("Overview");

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue = {
    windowWidth,
    activeButton,
    setActiveButton,
    planetColors,
  };

  return (
    <PlanetContext.Provider value={contextValue}>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetProvider, PlanetContext };
